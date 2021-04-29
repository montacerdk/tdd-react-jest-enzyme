import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App Component", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText("This is a counter app.");
    expect(linkElement).toBeInTheDocument();
  });
});
