import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { doneTodo, removeTodo } from "../actions";

const TodoCard = ({ task }) => {
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const dispatch = useDispatch();

  const removeTaskHandler = () => dispatch(removeTodo(task));
  
  const completedTasksHandler = () => dispatch(doneTodo(task));
  return (
    <li className={`todo__item--not-done ${task.done ? "todo__item--done" : ""}`}>
      <div className="todo__output" onClick={completedTasksHandler}>
        <h2>{task.Title}</h2>
        <p>{task.Description}</p>
      {task.done && (
        <button onClick={removeTaskHandler} className="form__remove-btn">Remove</button>
      )}
      </div>
      <form onSubmit={handleSubmit}>
        <input value={editTitle} onChange={ e => setEditTitle(e.target.value)} />
        <input value={editDescription} onChange={ e => setEditDescription(e.target.value)} />
      <button type='submit'>edit</button>
      </form>
    </li>
  );
};

export default TodoCard;
