import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  onClick?: () => void;
}

function Button(props: Props) {
  const { children, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-black hover:bg-white text-white hover:text-black rounded-full border border-black px-5 py-1 grow-0 shrink-0"
    >
      {children}
    </button>
  );
}

export default Button;
