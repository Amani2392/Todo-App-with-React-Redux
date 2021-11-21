import React, { useState } from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoState = useSelector((state) => state);
  const [status, setstatus] = useState("all");
  const [filterdTodos, setFilterdTodos] = useState([]);
  const statusHandler = (e) => {
    setstatus(e.target.value);
  };
  const filterHandler = () => {
    switch (status) {
      case "done":
        setFilterdTodos(todoState.filter((todo) => todo.done === true));
        break;
      case "pending":
        setFilterdTodos(todoState.filter((todo) => todo.done === false));
        break;
      default:
        setFilterdTodos(todoState);
        break;
    }
  };
  useEffect(() => {
    filterHandler();
  }, [todoState, status]);
  // const [filterdTodos, setFilterdTodos] = useState([]);

  // const addToDone = () => {
  //   setFilterdTodos(todoState.filter((todo) => todo.done === true));
  //   return filterdTodos;
  // };

  return (
    <div className="todo__container">
      <ul className="todo__list">
        {todoState.map((todo) => (
          <TodoCard key={todo.id} task={todo} />
        ))}
      </ul>
      {/* <button className="form__hide-done-btn" onClick={addToDone}>
        hide all done
      </button> */}
    </div>
  );
};

export default TodoList;
