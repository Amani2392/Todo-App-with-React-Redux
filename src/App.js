import React, { useEffect, useState } from "react";
import "./App.css";
import AddForm from "./ components/AddForm.js";
import TodoList from "./ components/TodoList.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLocalStorage } from "./actions";
import Status from "./ components/Status";

const App = () => {
  const todoState = useSelector((state) => state);
  const dispatch = useDispatch();

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
    let FromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    if (localStorage.getItem("tasks")) {
      dispatch(setLocalStorage(FromLocalStorage));
    }
  };
  
  return (
    <div className="App">
      <header className="App__header">
        <h1>React-Redux Todo App</h1>
      </header>
      <AddForm />
      <Status />
    </div>
  );
};

export default App;
