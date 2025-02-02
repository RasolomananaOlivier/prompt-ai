import { getPosts } from "@/server/actions/posts/getPosts";
import React from "react";
import PostList from "./PostList";

type Props = {
  query?: string;
};

export default async function SearchPostResult({ query }: Props) {
  const response = await getPosts({ query });

  const promptsCount = response.data?.length;
  return (
    <div>
      <p className="pb-5 text-gray-800 text-center text-lg">
        Found <span className="font-bold">{promptsCount}</span> prompt
        {promptsCount && promptsCount > 1 ? "s" : ""}
      </p>

      <PostList posts={response.data || []} />
    </div>
  );
}
