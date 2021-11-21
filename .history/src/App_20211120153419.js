import React, { useState, useEffect } from "react";
import "./App.css";

import AddForm from "./ components/AddForm.js";
import TodoList from "./ components/TodoList.js";
import { useSelector } from "react-redux";

const App = () => {
  const todoState = useSelector(state => state);
  const [tasksState, setTasksState] = useState([]);
  const [titleState, setTitleState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");

  useEffect(() => {
    savedTasksInLocalStorage();
  }, []);

  const storeInLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasksState));
  };
  useEffect(() => {
    storeInLocalStorage();
  }, [tasksState]);

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
        titleState={titleState}
        setTitleState={setTitleState}
        descriptionState={descriptionState}
        setDescriptionState={setDescriptionState}
      />
      <TodoList tasksState={tasksState} setTasksState={setTasksState} />
    </div>
  );
}

export default App;
