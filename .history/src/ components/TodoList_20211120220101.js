import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoState = useSelector((state) => state);
  const [done, setDone] = useState([]);
  const [setNotDone, setNotDone] = useState([]);

  // const addToDone = () => ({
  //   ...todoState.map((todo) => {
  //     todo.done === true ? setDone(todo) : setNotDone(todo);
  //   }),
  // });

  return (
    <div className="todo__container">
      <ul className="todo__list">
        {todoState.map((todo) => {
          todo.done === true ? setDone(todo) : setNotDone(todo);
        })}
        {todoState.map((todo) => (
          <TodoCard key={todo.id} task={todo} />
        ))}
      </ul>
      <button className="form__hide-done-btn">hide all done</button>
    </div>
  );
  console.log(done)
  console.log(setNotDone)
};

export default TodoList;
