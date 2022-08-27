import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import App from "./App";

const renderApp = () => render(<App />);

afterEach(() => {
  cleanup();
});

describe("TodoApp", () => {
  test("Should update the count as expected when start button is clicked", () => {
    let { getByTestId } = renderApp();
    let addButton = getByTestId("add-button");
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    expect(getByTestId("output")).toHaveTextContent("You clicked 2 times ...");
  });
});
