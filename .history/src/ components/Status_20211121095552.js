import React, { useState } from "react";

const Status = () => {
    const [status, setstatus] = useState("all");
    const [filterdTodos, setFilterdTodos] = useState([]);

    const statusHandler = (e) => {
        setstatus(e.target.value);
      };
    return(
        <select onChange={statusHandler}>
        <option value="all"> All</option>
        <option value="pending"> Pending </option>
        <option value="done"> Done </option>
      </select>
    )
}