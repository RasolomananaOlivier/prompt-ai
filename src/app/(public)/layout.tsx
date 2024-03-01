import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export default function PublicLayout({ children }: Props) {
  return <div className="flex flex-col items-center p-3">{children}</div>;
}
