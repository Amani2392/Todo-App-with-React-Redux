import React, { useState } from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoState = useSelector((state) => state);

  const addToDone = () => ({
    ...todoState.map((todo) => {
      todo.done === true ? todoState.filter(todo) : setNotDone(todo);
    }),
  });

  return (
    <div className="todo__container">
      <ul className="todo__list">
        {todoState.map((todo) => (
          <TodoCard key={todo.id} task={todo} />
        ))}
      </ul>
      <button className="form__hide-done-btn" >
        hide all done
      </button>
    </div>
  );
};

export default TodoList;
