import React from "react";
import TodoCard from "./TodoCard";


const TodoList = ({ filterdTodos }) => {

  return (
    <div className="todo__container">
      <ul className="todo__list">
        {filterdTodos.map((todo) => (
          <TodoCard key={todo.id} task={todo} />
        ))}
      </ul>
      <Status />

    </div>
  );
};

export default TodoList;
