import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";


const Status = (props) => {
  const todoState = useSelector((state) => state);
  const [status, setstatus] = useState("all");
  const [filterdTodos, setFilterdTodos] = useState([]);
  useEffect(() => {
    filterHandler();
  }, [todoState, status]);

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

  return (
    <div>
      <select onChange={statusHandler}>
        <option value="all"> All</option>
        <option value="pending"> Pending </option>
        <option value="done"> Done </option>
      </select>
    </div>
  );
};

export default Status;
