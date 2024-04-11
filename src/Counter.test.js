// src/Counter.test.js

import { render, fireEvent } from "@testing-library/react";
import App from "./App";
test("decrements the count", () => {
  const { getByText } = render(<App />);
  const incrementButton = getByText("Decrement");
  fireEvent.click(incrementButton);
  expect(getByText("Count: -1")).toBeInTheDocument();
});
