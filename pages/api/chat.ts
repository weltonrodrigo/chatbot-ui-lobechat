import { DEFAULT_SYSTEM_PROMPT, DEFAULT_TEMPERATURE, LOG_INCOMING_MESSAGES, LOG_TRIM_MESSAGES } from '@/utils/app/const';
import { OpenAIError, OpenAIStream } from '@/utils/server';

import { ChatBody, Message } from '@/types/chat';

// @ts-expect-error
import wasm from '../../node_modules/@dqbd/tiktoken/lite/tiktoken_bg.wasm?module';

import tiktokenModel from '@dqbd/tiktoken/encoders/cl100k_base.json';
import { Tiktoken, init } from '@dqbd/tiktoken/lite/init';

export const config = {
  runtime: 'edge',
};

const COMPLETION_TOKEN_LIMIT = 1000;
const TOKENIZER_BUFFER_FACTOR = 0.9; // Set a buffer of 10% to account for any discrepancies in token counting

const handler = async (req: Request): Promise<Response> => {
  try {
    let body = await req.json();
    const { model, messages, key, prompt, temperature } = body as ChatBody;
    if (LOG_INCOMING_MESSAGES === true) {
      let chatBody = body as ChatBody;
      if (LOG_TRIM_MESSAGES === true) {
        chatBody.messages = chatBody.messages.slice(-1);
      }
      console.log('data', JSON.stringify(chatBody), 'user', req.headers.get('x-forwarded-user'));
    }

    await init((imports) => WebAssembly.instantiate(wasm, imports));
    const encoding = new Tiktoken(
      tiktokenModel.bpe_ranks,
      tiktokenModel.special_tokens,
      tiktokenModel.pat_str,
    );

    let promptToSend = prompt;
    if (!promptToSend) {
      promptToSend = DEFAULT_SYSTEM_PROMPT;
    }

    let temperatureToUse = temperature;
    if (temperatureToUse == null) {
      temperatureToUse = DEFAULT_TEMPERATURE;
    }

    const prompt_tokens = encoding.encode(promptToSend);

    let tokenCount = prompt_tokens.length;
    let messagesToSend: Message[] = [];

    for (let i = messages.length - 1; i >= 0; i--) {
      const message = messages[i];
      const tokens = encoding.encode(message.content);

      if (tokenCount + tokens.length + COMPLETION_TOKEN_LIMIT > model.tokenLimit * TOKENIZER_BUFFER_FACTOR) {
        break;
      }
      tokenCount += tokens.length;
      messagesToSend = [message, ...messagesToSend];
    }

    encoding.free();

    const stream = await OpenAIStream(model, promptToSend, temperatureToUse, key, messagesToSend);

    return new Response(stream);
  } catch (error) {
    console.error(error);
    if (error instanceof OpenAIError) {
      return new Response('Error', { status: 500, statusText: error.message });
    } else {
      return new Response('Error', { status: 500 });
    }
  }
};

export default handler;
