import React from "react";
import PostItem from "./PostItem";
import { IPost } from "@/server/database/models/post";

type Props = {
  posts: IPost[];
};

function PostList({ posts }: Props) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3  lg:columns-4 gap-7">
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
}

export default PostList;
