"use client";

import { createPost } from "@/server/actions/post";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { BsSearch } from "react-icons/bs";

type Props = {};

function SearchBar({}: Props) {
  return (
    <form className="flex input input-bordered rounded-full justify-center items-center gap-2 w-full pr-0">
      <BsSearch />
      <input
        type="text"
        name="query"
        className="grow w-full h-full"
        placeholder="Search..."
      />
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
