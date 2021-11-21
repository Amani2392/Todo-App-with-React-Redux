import React, { useState } from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoState = useSelector((state) => state);
  const [done, setDone] = useState([]);
  const hideAllDone = (state) => {
    state = { ...todoState };
    todoState.map((todo) => {
      todo.done === true
        ? setDone(todo);
        : console.log("not done", todo);
    });
  };
  return (
    <div className="todo__container">
      <ul className="todo__list">
        {todoState.map((todo) => (
          <TodoCard key={todo.id} task={todo} />
        ))}
      </ul>
      <button className="form__hide-done-btn" onClick={hideAllDone}>
        hide all done
      </button>
    </div>
  );
};

export default TodoList;
