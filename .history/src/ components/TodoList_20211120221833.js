import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = () => {
  const [hideCompleted, setHideCompleted] = useState(false);
  const todoState = useSelector((state) => state);
  // const [done, setDone] = useState([]);
  // const [NotDone, setNotDone] = useState([]);

  // const addToDone = () => ({
  //   ...todoState.map((todo) => {
  //     todo.done === true ? setDone(todo) : setNotDone(todo);
  //   }),
  // });

  return (
    <div className="todo__container">
      <ul className="todo__list">
        {todoState.map((todo) => (
          <TodoCard key={todo.id} task={todo} />
        ))}
      </ul>
      <button onClick={() => setHideCompleted(!hideCompleted)}>
           {hideCompleted ? 'Show All' : 'Hide Completed'}
         </button>
    </div>
  );
};

export default TodoList;
