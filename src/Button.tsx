import { uuid } from "uuidv4";
import React, { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  ...other
}: Omit<
  React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
>) {
  const handleClick = () => {
    const id = uuid();
    console.log(id);
  };

  return (
    <button onClick={handleClick} {...other}>
      {children}
    </button>
  );
}
