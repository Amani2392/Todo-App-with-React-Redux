import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todosCopy }) => {
  return (
    <div className="todo__container">
      <ul className="todo__list">
        {todosCopy.map((todo) => (
          <TodoCard key={todo.id} task={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
