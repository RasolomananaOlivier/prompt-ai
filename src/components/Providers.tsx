"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export default function Providers({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
