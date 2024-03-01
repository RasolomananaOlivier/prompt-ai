import { isPromptText } from "@/guards";
import { Prompt, PromptImage } from "@/types";
import Image from "next/image";
import React from "react";
import PostItemContent from "./PostItemContent";

type Props = {
  prompt: Prompt;
};

function PostItem({ prompt }: Props) {
  return (
    <div className="flex flex-col gap-2 mb-6 break-inside-avoid">
      <PostItemContent prompt={prompt} />
      <div className="flex justify-between ">
        <h1 className="font-semibold">@prompts</h1>

        <span className="text-gray-600">Midjourney</span>
      </div>
    </div>
  );
}

export default PostItem;
