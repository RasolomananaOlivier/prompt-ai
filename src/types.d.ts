import { IPost } from "./server/database/models/post";

export interface IPostText extends IPost {
  prompt: String;
}

export interface IPostImage extends IPost {
  url: String;
}
