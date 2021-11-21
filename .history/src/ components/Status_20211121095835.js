import React, { useState } from "react";
import { useSelector } from "react-redux";

const Status = () => {
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
    
    return(
        <select onChange={statusHandler}>
        <option value="all"> All</option>
        <option value="pending"> Pending </option>
        <option value="done"> Done </option>
      </select>
    )
}