"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { BsSearch } from "react-icons/bs";

type Props = {
  redirectToSearch?: boolean;
};

export default function SearchBar({ redirectToSearch }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (term && term !== "") {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    if (redirectToSearch === true) {
      push(`/search?${params.toString()}`);
      return;
    }

    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <form
      className="flex input input-bordered rounded-full justify-center items-center gap-2 w-full md:w-3/5 pr-0"
      onSubmit={(e) => {
        e.preventDefault();
        const query = e.currentTarget.query.value;
        handleSearch(query);
      }}
    >
      <BsSearch />
      <input
        type="text"
        name="query"
        className="grow w-full h-full"
        placeholder="Search..."
        defaultValue={searchParams.get("query") || ""}
      />
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
}
