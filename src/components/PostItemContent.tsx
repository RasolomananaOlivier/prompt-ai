import { isPromptText } from "@/guards";
import { Prompt } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  prompt: Prompt;
};

const PostItemContent = ({ prompt }: Props) => {
  if (isPromptText(prompt)) {
    return <div>text</div>;
  }

  return (
    <Image
      src="/assets/images/example.webp"
      alt=""
      width={200}
      height={300}
      className="w-full rounded-3xl hover:scale-[1.02] transition-all"
    />
  );
};

export default PostItemContent;
