import { IPostText } from "./types";

export function isIPostText(object: unknown): object is IPostText {
  if (object != null && typeof object === "object") {
    return "prompt" in object;
  }

  return false;
}
