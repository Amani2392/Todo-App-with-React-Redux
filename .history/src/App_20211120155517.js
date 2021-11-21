import React, { useState, useEffect } from "react";
import "./App.css";

import AddForm from "./ components/AddForm.js";
import TodoList from "./ components/TodoList.js";
import { useSelector } from "react-redux";

const App = () => {
  const todoState = useSelector(state => state);
  const [tasksState, setTasksState] = useState([]);

  console.log('adfadsdasddsasadadsdas', todoState)
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
    setTasksState(FromLocalStorage);
  };

  return (
    <div className="App">
      <header className="App__header">
        <h1>React Todo App</h1>
      </header>
      <AddForm
        tasksState={tasksState}
        setTasksState={setTasksState}
      />
      <TodoList tasksState={tasksState} setTasksState={setTasksState} />
    </div>
  );
}

export default App;
