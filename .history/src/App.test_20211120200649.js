import reducers from "./reducers";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import AddForm from "./ components/AddForm.js";
import TodoList from "./ components/TodoList.js";

test('It saves to localStorage', () => {
    let state;
    state = reducers([], {type:'SET_LOCALSTORAGE',localStorage:[{Title:'Shpooing',Description:'buy new boots',done:false,id:490.6919150106825}]});
    expect(state).toEqual([{Title:'Shpooing',Description:'buy new boots',done:false,id:490.6919150106825}]);
  });
test("It adds todo", () => {
  let state;
  state = reducers([], {
    type: "ADD_TODO",
    todo: {
      Title: "shopping",
      Description: "buy new shoes",
      done: false,
      id: 679.2928278685333,
    },
  });
  expect(state).toEqual([
    {
      Title: "shopping",
      Description: "buy new shoes",
      done: false,
      id: 679.2928278685333,
    },
  ]);
});

test("It Edits todo", () => {
  let state;
  state = reducers(
    [
      {
        Title: "shopping",
        Description: "buy new pants",
        done: false,
        id: 154.27873807268045,
      },
    ],
    {
      type: "EDIT_TODO",
      todo: {
        Title: "shopping",
        Description: "buy new socks",
        done: false,
        id: 154.27873807268045,
      },
    }
  );
  expect(state).toEqual([
    { Title: "shopping", Description: "buy new socks", done: false, id: 154.27873807268045 },
  ]);
});

test("It toggles done todo", () => {
  let state;
  state = reducers([], {
    type: "DONE_TODO",
    todo: {
      Title: "shopping",
      Description: "buy makeup",
      done: true,
      id: 515.8198015211999,
    },
  });
  expect(state).toEqual([]);
});
test('It removes todo', () => {
    let state;
    state = reducers([], {type:'DONE_TODO',todo:{Title:'shopping',Description:'buy makeup',done:true,id:142.7704729117152}});
    expect(state).toEqual([]);
  });

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