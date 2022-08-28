import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import App from "./App";

const renderApp = () => render(<App />);

afterEach(() => {
  cleanup();
});

describe("TodoApp", () => {
  test("Should update the count as expected when add-task button is clicked", () => {
    // fix this test
    let { getByTestId } = renderApp();
    let addButton = getByTestId("add-task-button");
    fireEvent.click(addButton);
    expect(getByTestId("todo-results")).toHaveTextContent("DONE: 1");
  });
});
