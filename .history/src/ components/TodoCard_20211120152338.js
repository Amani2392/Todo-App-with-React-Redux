import React from "react";

const TodoCard = ({ tasksState, setTasksState, task }) => {
    
  const removeTaskHandler = () => {
    setTasksState(tasksState.filter((todo) => todo.id !== task.id));
  };
  const completedTasksHandler = () => {
    setTasksState(
      tasksState.map( todo => todo.id === task.id ? {...todo, done: !todo.done} : todo);
      // {
    //     if (todo.id === task.id) {
    //       return {
    //         ...todo,
    //         done: !todo.done,
    //       };
    //     }
    //     return todo;
    //   })
    // );
  // };
  return (
    <li className={`todo__item--not-done ${task.done ? "todo__item--done" : ""}`}>
      <div className="todo__output" onClick={completedTasksHandler}>
        <h2>{task.Title}</h2>
        <p>{task.Description}</p>
      </div>
      {task.done && (
        <button onClick={removeTaskHandler} className="form__remove-btn">Remove</button>
      )}
    </li>
  );
};

export default TodoCard;
