import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

describe("renders learn react link", () => {
  render(<App />, { wrapper: BrowserRouter });

  const linkElement = screen.getByText(/Hello World/i);
  const buttonElement = screen.getByRole("button");

  it("will be rendered content", () => {
    expect(linkElement).toBeInTheDocument();
  });
  it("button Will have text Hello World", () => {
    expect(buttonElement).toHaveTextContent("About");
  });
});
