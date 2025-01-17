"use client";

import { signIn } from "next-auth/react";

export default function GoogleSignInButton() {
  return (
    <button
      className="btn btn-outline"
      onClick={async () => await signIn("google")}
    >
      Sign in with Google
    </button>
  );
}
