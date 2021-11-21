import React, { useState } from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoState = useSelector((state) => state);
  const [done, setDone] = useState([]);
  const hideAllDone = (state) => {
    state = { ...todoState };
    console.log(...todoState.done === true)
    if (todoState.done === true) setDone(todoState);
    console.log("sone", done);
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
