import React from "react";
import PostItemContent from "./PostItemContent";
import { IPost, PostEntity } from "@/server/database/models/post";
import { Eye, ThumbsUp } from "lucide-react";

type Props = {
  post: PostEntity;
};

function PostItem({ post }: Props) {
  return (
    <div className="flex flex-col gap-2 mb-6 break-inside-avoid border rounded-lg p-3 bg-slate-50">
      <div className="flex gap-2 flex-wrap">
        {post.tags.map((tag, index) => (
          <div
            key={index}
            className="rounded-full bg-orange-200 max-w-min text-sm px-3 font-bold text-orange-800"
          >
            coding
          </div>
        ))}
      </div>

      <div className="divider m-0"></div>

      <h2 className="font-bold">{post.title}</h2>
      <PostItemContent post={post} />
      <div className="flex justify-end mt-2">
        {/* <div className="font-semibold text-gray-800">@pseudonym</div> */}

        <div className="flex gap-2">
          <div className="flex gap-1 text-sm bg-slate-200 px-3 py-1 rounded-full">
            <Eye size={18} /> {post.views}
          </div>

          <div className="flex gap-1 text-sm bg-slate-200 px-3 py-1 rounded-full">
            <ThumbsUp size={18} /> {post.likes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
