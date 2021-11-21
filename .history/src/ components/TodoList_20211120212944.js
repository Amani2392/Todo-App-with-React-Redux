import React, { useState } from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoState = useSelector((state) => state);
  const hideAllDone = (state) => {
    const [done, setDone] = useState([]);
    state = { ...todoState };
    todoState.map((todo) => {
      todo.done === true
        ? setDone(todo)
        : console.log("not done", todo);
    });
    console.log(done)
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
