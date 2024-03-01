import React from "react";
import PostItem from "./PostItem";
import { Prompt } from "@/types";

type Props = {
  posts: Prompt[];
};

function PostList({ posts }: Props) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3  lg:columns-4 gap-7">
      {posts.map((post) => (
        <PostItem key={post.id} prompt={post} />
      ))}
    </div>
  );
}

export default PostList;
