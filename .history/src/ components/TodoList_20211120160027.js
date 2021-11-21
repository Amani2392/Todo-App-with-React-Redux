import React from "react";
import TodoCard from "./TodoCard";

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
        </ul>
    </div>
  );
};

export default TodoList;
