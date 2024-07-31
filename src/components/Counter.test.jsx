import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

test("increments counter", () => {
  const { getByText } = render(<Counter />);
  const button = getByText("Increment");
  const count = getByText(/count/i);

  expect(count).toHaveTextContent("Count: 0");
  fireEvent.click(button);
  expect(count).toHaveTextContent("Count: 1");
});
