"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  options: string[];
};

function Dropdown({ options }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handler(ev: MouseEvent) {
      if (ref.current && !ref.current.contains(ev.target as HTMLDivElement)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative inline-block text-left grow-0 shrink-0" ref={ref}>
      <button
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded="true"
        aria-haspopup="true"
      >
        {options[selected]}
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <div
                onClick={() => setSelected(index)}
                className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                role="menuitem"
                id="menu-item-0"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
