import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { doneTodo, editTodo, removeTodo } from "../actions";

const TodoCard = ({ task }) => {
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const dispatch = useDispatch();

  const removeTaskHandler = () => dispatch(removeTodo(task));

  const completedTasksHandler = () => dispatch(doneTodo(task));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editTodo({
        Title: editTitle,
        Description: editDescription,
        done: false,
        id: task.id,
      })
    );
  };
  return (
    <li
      className={`todo__item--not-done ${task.done ? "todo__item--done" : ""}`}
    >
      <div className="todo__output" onClick={completedTasksHandler}>
        <h2>{task.Title}</h2>
        <p>{task.Description}</p>
        {task.done && (
          <button onClick={removeTaskHandler} className="form__remove-btn">
            Remove
          </button>
        )}
      </div>
      <button className="form__remove-btn">Edit</button>
      <form onSubmit={handleSubmit}>
        <input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="Edit Title"
          required
        />
        <input
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          placeholder="Edit Description"
          required
        />
        <button className="form__remove-btn" type="submit">
          Confirm
        </button>
      </form>
    </li>
  );
};

export default TodoCard;
