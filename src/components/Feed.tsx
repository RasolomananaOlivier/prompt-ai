import React from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";
import PostList from "./PostList";
import Link from "next/link";
import { IPost } from "@/server/database/models/post";

type Props = {
  posts: IPost[];
};

const Feed = ({ posts }: Props) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        <h2 className="text-2xl font-bold">Trending Prompts</h2>

        <div className="flex gap-3">
          <button className="btn btn-primary">Explore Promps</button>
          <button className="btn btn-primary">
            <Link href="/inspirations">Explore AI Art</Link>
          </button>
        </div>
      </div>

      <PostList posts={posts} />
    </div>
  );
};

export default Feed;
