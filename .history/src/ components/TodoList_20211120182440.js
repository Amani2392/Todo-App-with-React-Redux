import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";
import { doneTodo } from "../actions";

const TodoList = () => {
  const todoState = useSelector((state) => state);
  const clickHandler = (e) => {
    e.preventDefault();
   const doneTodos = document.querySelectorAll("todo__item--done");
  console.log(doneTodos);

  };
  return (
    <div className="todo__container">
      <ul className="todo__list">
        {todoState.map((todo) => (
          <TodoCard key={todo.id} task={todo} />
        ))}
        <button onClick={clickHandler}> hide </button>
      </ul>
    </div>
  );
};

export default TodoList;
