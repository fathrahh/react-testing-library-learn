import React, { createContext } from "react";

export default function JWTContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const JWTContext = createContext("something");
  return <JWTContext.Provider value="dark">{children}</JWTContext.Provider>;
}
