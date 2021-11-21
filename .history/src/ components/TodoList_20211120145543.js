import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = ({tasksState, setTasksState}) => {

  return (
    <div className='todo__container'>
        <ul className='todo__list'>
           {tasksState.map((todo) => (
            <TodoCard 
            setTasksState={setTasksState}
            tasksState={tasksState}
            key={todo.id} 
            task={todo}
            />
           ))}
        </ul>
    </div>
  );
};

export default TodoList;
