import React, { useState } from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = ({ filterdTodos }) => {
  const todoState = useSelector((state) => state);
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
  return (
    <div className="todo__container">
      <ul className="todo__list">
        {filterdTodos.map((todo) => (
          <TodoCard key={todo.id} task={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
