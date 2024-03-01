import React from "react";
import { IoIosClose } from "react-icons/io";

type Props = {
  tags: string[];
  removeTag: (tag: string) => void;
};

function SelectedTags({ tags, removeTag }: Props) {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold">Tags</h2>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center justify-between border rounded-full shrink-0 grow-0 bg-white"
          >
            <span className="px-4 py-2"># {tag} </span>
            <button
              className="flex justify-center items-center border rounded-full p-2 w-[30px] h-[30px] mr-1"
              onClick={() => removeTag(tag)}
            >
              <IoIosClose />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedTags;
