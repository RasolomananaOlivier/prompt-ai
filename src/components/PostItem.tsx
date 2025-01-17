import React from "react";
import PostItemContent from "./PostItemContent";
import { IPost } from "@/server/database/models/post";

type Props = {
  post: IPost;
};

function PostItem({ post }: Props) {
  return (
    <div className="flex flex-col gap-2 mb-6 break-inside-avoid">
      <PostItemContent post={post} />
      <div className="flex justify-between ">
        <h1 className="font-semibold">@prompts</h1>

        <span className="text-gray-600">Midjourney</span>
      </div>
    </div>
  );
}

export default PostItem;
