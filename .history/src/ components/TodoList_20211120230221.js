import React, { useState } from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoState = useSelector((state) => state);
  const [filterdTodos, setFilterdTodos] = useState([]);

  const addToDone = () => {
    setFilterdTodos(todoState.filter((todo) => todo.done === true));
    console.log(filterdTodos);
  };

  return (
    <div className="todo__container">
      <ul className="todo__list">
        {todoState.map((todo) => (
          <TodoCard key={todo.id} task={todo} />
        ))}
      </ul>
      <button className="form__hide-done-btn" onClick={addToDone}>hide all done</button>
    </div>
  );
};

export default TodoList;
