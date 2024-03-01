import React from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";
import PostList from "./PostList";
import Link from "next/link";
import { Prompt } from "@/types";

type Props = {};

const fakeData: Prompt[] = [
  {
    id: 1,
    tag: "test",
  },
];

const Feed = (props: Props) => {
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

      <PostList posts={fakeData} />
    </div>
  );
};

export default Feed;
