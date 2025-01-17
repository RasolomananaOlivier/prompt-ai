"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import connectDB from "../database/database";
import Post, { IPost } from "../database/models/post";

type Message = {
  message: string;
};

const messages: Message[] = [{ message: "test" }, { message: "test2" }];

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid email",
  }),
});

export async function createPost(
  post: IPost
): Promise<IResponse<IPost | null>> {
  try {
    await connectDB();

    await Post.create(post);

    return {
      status: "success",
      message: "Post created",
      data: post,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Error creating post",
      data: null,
    };
  }
}

export async function getPost(): Promise<IResponse<IPost[] | null>> {
  try {
    await connectDB();

    const posts = await Post.find({});

    console.log(posts);

    return {
      status: "success",
      message: "Post retrieved",
      data: posts,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Error getting post",
      data: null,
    };
  }
}
