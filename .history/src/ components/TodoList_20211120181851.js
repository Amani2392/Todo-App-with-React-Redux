import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoState = useSelector((state) => state);
  const clickHandler = (e) => {
    e.preventDefault();
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
