import React, { useEffect } from "react";
import "./App.css";

import AddForm from "./ components/AddForm.js";
import TodoList from "./ components/TodoList.js";

const App = () => {

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
    dispatch()
    setTasksState(FromLocalStorage);
  };

  return (
    <div className="App">
      <header className="App__header">
        <h1>React Todo App</h1>
      </header>
      <AddForm />
      <TodoList />
    </div>
  );
}

export default App;
