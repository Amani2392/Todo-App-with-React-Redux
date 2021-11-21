import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoState = useSelector(state => state);
  return (
    <div className='todo__container'>
        <ul className='todo__list'>
           {todoState.map( todo => (
            <TodoCard 
            key={todo.id} 
            task={todo}
            />
           ))}
           <button> hide </button>
        </ul>
    </div>
  );
};

export default TodoList;
