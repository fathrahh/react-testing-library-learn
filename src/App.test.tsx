import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  const buttonElement = screen.getByRole("button");
  it("it will be rendered content", () => {
    expect(linkElement).toBeInTheDocument();
  });
  it("button Will have text Hello World", () => {
    expect(buttonElement).toHaveTextContent("Hello World");
  });
});
