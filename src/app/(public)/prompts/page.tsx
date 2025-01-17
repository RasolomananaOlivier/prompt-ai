import Dropdown from "@/components/Dropdown";
import PostList from "@/components/PostList";
import SearchBar from "@/components/SearchBar";
import SearchTag from "@/components/SearchTag";
import { getPost } from "@/server/actions/post";
import React from "react";

type Props = {};

const PLATFORMS_OPTIONS = ["All Platforms", "Dall E", "Firefly", "MidJourney"];
const SORT_OPTIONS = ["Popular", "Recent"];

export default async function InspirationsPage({}: Props) {
  const response = await getPost();

  return (
    <main className="flex flex-col gap-6 pt-8 container">
      <SearchBar />

      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">Latest Image Prompts</h1>
          <p className="text-gray-700">
            Discover a stunning gallery of AI-generated images, where creativity
            knows no bounds. From fantastical landscapes to innovative design
            concepts, our Latest Image Prompts page showcases the cutting-edge
            of artificial intelligence in visual art, inspiring artists and
            enthusiasts alike with its endless possibilities and breathtaking
            originality. Dive into a world where each image tells a unique
            story, crafted by the intricate algorithms of AI.
          </p>
        </div>

        <div className="flex gap-3 pr-5">
          <Dropdown options={PLATFORMS_OPTIONS} />
          <Dropdown options={SORT_OPTIONS} />
        </div>
      </div>

      <SearchTag />

      {response.data != null && <PostList posts={response.data} />}
    </main>
  );
}
