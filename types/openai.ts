import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_0613 = 'gpt-3.5-turbo-0613',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_3_5_16K = 'gpt-3.5-turbo-16k',
  GPT_4 = 'gpt-4',
  GPT_4_0613 = 'gpt-4-0613',
  GPT_4_32K = 'gpt-4-32k',
  GPT_3_5_POE = 'gpt-3.5-turbo-poe',
  GPT_4_POE = 'gpt-4-poe',
  CLAUDE_INSTANT = 'claude-instant',
  CLAUDE_PLUS = 'claude+',
  CLAUDE_INSTANT_100K = 'claude-instant-100k',
  TEST_GPT_3_5_POE = 'test-gpt-3.5-turbo-poe',
  TEST_GPT_4_POE = 'test-gpt-4-poe',
  TEST_CLAUDE_INSTANT = 'test-claude-instant',
  TEST_CLAUDE_PLUS = 'test-claude+',
  TEST_CLAUDE_INSTANT_100K = 'test-claude-instant-100k',
  BARD = 'bard',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5-TURBO',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_0613]: {
    id: OpenAIModelID.GPT_3_5_0613,
    name: 'GPT-3.5-TURBO-0613',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5-TURBO',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_16K]: {
    id: OpenAIModelID.GPT_3_5_16K,
    name: 'GPT-3.5-TURBO-16K',
    maxLength: 48000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_0613]: {
    id: OpenAIModelID.GPT_4_0613,
    name: 'GPT-4-0613',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.GPT_3_5_POE]: {
    id: OpenAIModelID.GPT_3_5_POE,
    name: 'GPT-3.5-TURBO-POE',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4_POE]: {
    id: OpenAIModelID.GPT_4_POE,
    name: 'GPT-4-POE',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.CLAUDE_INSTANT]: {
    id: OpenAIModelID.CLAUDE_INSTANT,
    name: 'CLAUDE-INSTANT',
    maxLength: 11000,
    tokenLimit: 11000,
  },
  [OpenAIModelID.CLAUDE_PLUS]: {
    id: OpenAIModelID.CLAUDE_PLUS,
    name: 'CLAUDE+',
    maxLength: 11000,
    tokenLimit: 11000,
  },
  [OpenAIModelID.CLAUDE_INSTANT_100K]: {
    id: OpenAIModelID.CLAUDE_INSTANT_100K,
    name: 'CLAUDE-INSTANT-100K',
    maxLength: 100000,
    tokenLimit: 100000,
  },
  [OpenAIModelID.TEST_GPT_3_5_POE]: {
    id: OpenAIModelID.TEST_GPT_3_5_POE,
    name: 'TEST-GPT-3.5-TURBO-POE',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.TEST_GPT_4_POE]: {
    id: OpenAIModelID.TEST_GPT_4_POE,
    name: 'TEST-GPT-4-POE',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.TEST_CLAUDE_INSTANT]: {
    id: OpenAIModelID.TEST_CLAUDE_INSTANT,
    name: 'TEST-CLAUDE-INSTANT',
    maxLength: 11000,
    tokenLimit: 11000,
  },
  [OpenAIModelID.TEST_CLAUDE_PLUS]: {
    id: OpenAIModelID.TEST_CLAUDE_PLUS,
    name: 'TEST-CLAUDE+',
    maxLength: 11000,
    tokenLimit: 11000,
  },
  [OpenAIModelID.TEST_CLAUDE_INSTANT_100K]: {
    id: OpenAIModelID.TEST_CLAUDE_INSTANT_100K,
    name: 'TEST-CLAUDE-INSTANT-100K',
    maxLength: 100000,
    tokenLimit: 100000,
  },
  [OpenAIModelID.BARD]: {
    id: OpenAIModelID.BARD,
    name: 'BARD',
    maxLength: 30000,
    tokenLimit: 10000,
  },
};