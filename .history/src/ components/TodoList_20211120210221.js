import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = () => {
  
  const todoState = useSelector((state) => state);

  return (
    <div className="todo__container">
      <ul className="todo__list">
        {todoState.map((todo) => (
          <TodoCard key={todo.id} task={todo} />
        ))}
      </ul>
      <button className='form__hide-done-btn' onClick={}>
        hide all done
      </button>
    </div>
  );
};

export default TodoList;
