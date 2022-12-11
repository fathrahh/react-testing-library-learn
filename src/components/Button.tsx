import { v4 as uuidv4 } from "uuid";
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
    const id = uuidv4();
    console.log(id);
  };

  return (
    <button onClick={handleClick} {...other}>
      {children}
    </button>
  );
}
