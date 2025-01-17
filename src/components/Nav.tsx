"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Nav() {
  const pathname = usePathname();

  const isLoggedIn = false;

  if (pathname.startsWith("/auth")) {
    return null;
  }

  return (
    <div className="flex items-center justify-center pt-3">
      <nav className="navbar container">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            PromptAI
          </Link>
        </div>
        <div className="flex-none">
          {isLoggedIn ? <AuthenticatedItems /> : <UnauthenticatedItems />}
        </div>
      </nav>
    </div>
  );
}

const AuthenticatedItems = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

const UnauthenticatedItems = () => {
  return (
    <div className="flex justify-center items-center gap-3">
      <Link href="/auth/register" className="btn btn-outline">
        Register
      </Link>
      <Link href="/auth/login" className="btn btn-primary">
        Login
      </Link>
    </div>
  );
};
