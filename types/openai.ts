import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

// Define all the model identifiers
export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_0613 = 'gpt-3.5-turbo-0613',
  GPT_3_5_16K = 'gpt-3.5-turbo-16k',
  GPT_3_5_16K_0613 = 'gpt-3.5-turbo-16k-0613',
  GPT_3_5_1106 = 'gpt-3.5-turbo-1106',
  GPT_4_0613 = 'gpt-4-0613',
  GPT_4 = 'gpt-4',
  GPT_4_TURBO_PREVIEW = 'gpt-4-turbo-preview',
  GPT_4_1106 = 'gpt-4-1106-preview',	
  GPT_4_vision = 'gpt-4-vision-preview',	
  GPT_4_32K_0613 = 'gpt-4-32k-0613',
  GPT_4_32K = 'gpt-4-32k',
  CLAUDE_2_100K = 'claude-2-100k',
  CLAUDE_INSTANT_100K = 'claude-instant-100k',
  CLAUDE_INSTANT = 'claude-instant',
  BARD = 'bard',
  ASSISTANT = 'assistant',
  GOOGLE_PALM	= 'google-palm',
  LLAMA_2_70b_chat = 'llama_2_70b_chat',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5_1106;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  // Define all the models with their properties
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4096,
  },
  [OpenAIModelID.GPT_3_5_0613]: {
    id: OpenAIModelID.GPT_3_5_0613,
    name: 'GPT-3.5-0613',
    maxLength: 12000,
    tokenLimit: 4096,
  },
  [OpenAIModelID.GPT_3_5_16K]: {
    id: OpenAIModelID.GPT_3_5_16K,
    name: 'GPT-3.5-16K',
    maxLength: 48000,
    tokenLimit: 16384,
  },
  [OpenAIModelID.GPT_3_5_16K_0613]: {
    id: OpenAIModelID.GPT_3_5_16K_0613,
    name: 'GPT-3.5-16K-0613',
    maxLength: 48000,
    tokenLimit: 16384,
  },
  [OpenAIModelID.GPT_3_5_1106]: {
    id: OpenAIModelID.GPT_3_5_1106,
    name: 'gpt-3.5-turbo-1106',
    maxLength: 48000,
    tokenLimit: 16384,
  },
  [OpenAIModelID.GPT_4_0613]: {
    id: OpenAIModelID.GPT_4_0613,
    name: 'GPT-4-0613',
    maxLength: 24000,
    tokenLimit: 8192,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8192,
  },
  [OpenAIModelID.GPT_4_TURBO_PREVIEW]: {
    id: OpenAIModelID.GPT_4_TURBO_PREVIEW,
    name: 'gpt-4-turbo-preview',
    maxLength: 376000,
    tokenLimit: 128000,
  },
  [OpenAIModelID.GPT_4_1106]: {
    id: OpenAIModelID.GPT_4_1106,
    name: 'gpt-4-1106-preview',
    maxLength: 376000,
    tokenLimit: 128000,
  },
  [OpenAIModelID.GPT_4_vision]: {
    id: OpenAIModelID.GPT_4_vision,
    name: 'gpt-4-vision-preview',
    maxLength: 376000,
    tokenLimit: 128000,
  },
  [OpenAIModelID.GPT_4_32K_0613]: {
    id: OpenAIModelID.GPT_4_32K_0613,
    name: 'GPT-4-32K-0613',
    maxLength: 96000,
    tokenLimit: 32768,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32768,
  },
  [OpenAIModelID.CLAUDE_2_100K]: {
    id: OpenAIModelID.CLAUDE_2_100K,
    name: 'Claude-2-100K',
    maxLength: 360000,
    tokenLimit: 102400,
  },
  [OpenAIModelID.CLAUDE_INSTANT_100K]: {
    id: OpenAIModelID.CLAUDE_INSTANT_100K,
    name: 'Claude-Instant-100K',
    maxLength: 360000,
    tokenLimit: 102400,
  },
  [OpenAIModelID.CLAUDE_INSTANT]: {
    id: OpenAIModelID.CLAUDE_INSTANT,
    name: 'Claude-Instant',
    maxLength: 36000,
    tokenLimit: 10240,
  },
  [OpenAIModelID.BARD]: {
    id: OpenAIModelID.BARD,
    name: 'BARD',
    maxLength: 30000,
    tokenLimit: 10000,
  },
  [OpenAIModelID.ASSISTANT]: {
    id: OpenAIModelID.ASSISTANT,
    name: 'ASSISTANT',
    maxLength: 30000,
    tokenLimit: 10000,
  },
  [OpenAIModelID.GOOGLE_PALM]: {
    id: OpenAIModelID.GOOGLE_PALM,
    name: 'GOOGLE-PALM',
    maxLength: 30000,
    tokenLimit: 10000,
  },
  [OpenAIModelID.LLAMA_2_70b_chat]: {
    id: OpenAIModelID.LLAMA_2_70b_chat,
    name: 'LLAMA_2_70b_chat',
    maxLength: 30000,
    tokenLimit: 10000,
  },
};
  