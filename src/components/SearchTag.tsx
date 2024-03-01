"use client";

import React, { useRef, useState } from "react";
import SelectedTags from "./SelectedTags";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

type Props = {};

const TAGS = [
  "realistic",
  "impressionistic",
  "pixelart",
  "fantasy",
  "scifi",
  "horror",
  "romance",
  "dreamlike",
  "nostalgic",
  "suspenseful",
  "landscape",
  "portrait",
  "animal",
  "abstract",
  "biginner",
  "intermediate",
  "advanced",
  "storytelling",
];

function SearchTag({}: Props) {
  const [tags, setTags] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);

  const addTag = (tag: string) => {
    if (!tags.find((t) => t === tag)) {
      const newTags = [...tags, tag];
      setTags(newTags);
    }
  };

  const removeTag = (tag: string) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
  };

  const scroll = (left = true) => {
    if (ref.current) {
      const offset = left
        ? -(ref.current.offsetWidth / 2)
        : ref.current.offsetWidth / 2;

      ref.current.scrollLeft += offset;
    }
  };

  return (
    <div className="flex flex-col gap-3 relative">
      <div
        ref={ref}
        className="max-w-full flex overflow-x-auto gap-3 px-8 no-scrollbar scroll-smooth"
      >
        {TAGS.map((tag) => (
          <button
            key={tag}
            className="px-4 py-2 border rounded-full shrink-0 grow-0 bg-white"
            onClick={() => addTag(tag)}
          >
            # {tag}
          </button>
        ))}

        <button
          className="absolute left-0 top-1 bg-black text-white rounded-full p-2 transition-all"
          onClick={() => scroll()}
        >
          <IoChevronBack />
        </button>
        <button
          className="absolute right-0 top-1 bg-black text-white rounded-full p-2 transition-all"
          onClick={() => scroll(false)}
        >
          <IoChevronForward />
        </button>
      </div>

      <SelectedTags tags={tags} removeTag={removeTag} />
    </div>
  );
}

export default SearchTag;
