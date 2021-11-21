import React, { useEffect, useState } from "react";
import "./App.css";
import AddForm from "./ components/AddForm.js";
import TodoList from "./ components/TodoList.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLocalStorage } from "./actions";

const App = () => {
  const todoState = useSelector((state) => state);
  const [status, setstatus] = useState("all");
  const [filterdTodos, setFilterdTodos] = useState([]);
  const dispatch = useDispatch();
  const statusHandler = (e) => {
    setstatus(e.target.value);
  };
  const filterHandler = () => {
    switch (status) {
      case "done":
        setFilterdTodos(todoState.filter((todo) => todo.done === true));
        break;
      case "pending":
        setFilterdTodos(todoState.filter((todo) => todo.done === false));
        break;
      default:
        setFilterdTodos(todoState);
        break;
    }
  };
  useEffect(() => {
    filterHandler();
  }, [todoState, status]);

  useEffect(() => {
    savedTasksInLocalStorage();
  }, []);

  const storeInLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(todoState));
  };

  useEffect(() => {
    storeInLocalStorage();
  }, [todoState]);

  const savedTasksInLocalStorage = () => {
    if (localStorage.getItem("tasks" === null)) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
    let FromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    dispatch(setLocalStorage(FromLocalStorage));
  };

  return (
    <div className="App">
      <header className="App__header">
        <h1>React Todo App</h1>
      </header>
      <AddForm statusHandler={statusHandler}/>
      <TodoList filterdTodos={filterdTodos} />
    </div>
  );
};

export default App;
