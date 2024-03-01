export interface Prompt {
  id: number;
  tag: String;
}

export interface PromptText extends Prompt {
  prompt: String;
}

export interface PromptImage extends Prompt {
  url: String;
}
