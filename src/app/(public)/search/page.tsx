import PostList from "@/components/PostList";
import SearchPostResult from "@/components/search-post-result";
import SearchBar from "@/components/SearchBar";
import React, { Suspense } from "react";

type Props = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { query } = await searchParams;

  return (
    <main className="w-full flex flex-col items-center gap-4">
      <SearchBar />

      {/* <PostList  /> */}
      <Suspense key={query} fallback={<div>Loading...</div>}>
        <SearchPostResult query={query} />
      </Suspense>
    </main>
  );
}
