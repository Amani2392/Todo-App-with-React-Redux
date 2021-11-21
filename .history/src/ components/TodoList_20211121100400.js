import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = ({ filterdTodos }) => {

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
