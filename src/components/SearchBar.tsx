import React from "react";
import { BsSearch } from "react-icons/bs";

type Props = {};

function SearchBar({}: Props) {
  return (
    <div className="flex input input-bordered rounded-full justify-center items-center gap-2 w-full">
      <BsSearch />
      <input
        type="text"
        className="grow w-full h-full"
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
