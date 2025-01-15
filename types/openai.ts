export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_4 = 'gpt-4',
  GPT_4o = 'gpt-4o',
  GPT_4o_latest = 'chatgpt-4o-latest',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_4o;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4o]: {
    id: OpenAIModelID.GPT_4o,
    name: 'GPT-4o',
    maxLength: 24000,
    tokenLimit: 128000,
  },
  [OpenAIModelID.GPT_4o_latest]: {
    id: OpenAIModelID.GPT_4o_latest,
    name: 'ChatGPT-4o-Latest',
    maxLength: 24000,
    tokenLimit: 128000,
  },
};
