import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "./ components/AddForm.js";
import TodoList from "./ components/TodoList.js";
import { toggleDoneTodo } from './redux/actions'
const App = () => {
  const dispatch = useDispatch();
  const [tasksState, setTasksState] = useState([]);
  const [titleState, setTitleState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");  
  return (
    <div className="App">
      <header className="App__header">
        <h1>React Todo App</h1>
      </header>
      <AddForm
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
