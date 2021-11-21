import React, { useState } from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = ({ filterdTodos }) => {
  const todoState = useSelector((state) => state);

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
