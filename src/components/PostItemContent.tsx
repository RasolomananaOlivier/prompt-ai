import { isIPostText } from "@/guards";
import { IPost } from "@/server/database/models/post";
import Image from "next/image";
import React from "react";

type Props = {
  post: IPost;
};

const PostItemContent = ({ post }: Props) => {
  return <div className="rounded-xl text-gray-700">{post.prompt}</div>;

  // if (isIPostText(post)) {
  //   return (
  //     <div className="bg-gray-700 p-3 rounded-xl h-[180px] text-cyan-50">
  //       {post.prompt}
  //     </div>
  //   );
  // }

  // return (
  //   <Image
  //     src="/assets/images/example.webp"
  //     alt=""
  //     width={200}
  //     height={300}
  //     className="w-full rounded-3xl hover:scale-[1.02] transition-all"
  //   />
  // );
};

export default PostItemContent;
