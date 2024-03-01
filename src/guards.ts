import { PromptText } from "./types";

export function isPromptText(object: unknown): object is PromptText {
  if (object != null && typeof object === "object") {
    return "prompt" in object;
  }

  return false;
}
