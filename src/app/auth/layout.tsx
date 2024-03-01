import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export default function AuthLayout({ children }: Props) {
  return <div className="h-screen p-3 ">{children}</div>;
}
