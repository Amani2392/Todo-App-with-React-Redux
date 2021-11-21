import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

const Status = () => {
  const todoState = useSelector((state) => state);
  const [status, setstatus] = useState("all");
  const [todosCopy, settodosCopy] = useState([]);
  useEffect(() => {
    filterHandler();
  }, [todoState, status]);

  const statusHandler = (e) => {
    setstatus(e.target.value);
  };

  const filterHandler = () => {
    switch (status) {
      case "done":
        settodosCopy(todoState.filter((todo) => todo.done === true));
        break;
      case "pending":
        settodosCopy(todoState.filter((todo) => todo.done === false));
        break;
      default:
        settodosCopy(todoState);
        break;
    }
  };

  return (
    <div>
      <select onChange={statusHandler}>
        <option value="all"> All</option>
        <option value="pending"> Pending </option>
        <option value="done"> Done </option>
      </select>
      <TodoList todosCopy={todosCopy} />
    </div>
  );
};

export default Status;
