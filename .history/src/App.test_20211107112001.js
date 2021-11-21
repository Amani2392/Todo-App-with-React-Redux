import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import AddForm from "./ components/AddForm.js";
import TodoList from "./ components/TodoList.js";

describe("Renders main components", () => {
  test("App component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  describe("todo list test", () => {
    test("should show title of todos", () => {
      render(<App />);
      expect(screen.getByText("React Todo App")).toBeInTheDocument();
    });
  });
  test("AddForm component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test("TodoList component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TodoList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
describe("Testing the form component", () => {
  test("Has correct inputs fileds", () => {
    render(<AddForm />);
    expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
