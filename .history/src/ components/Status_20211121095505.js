import React, { useState } from "react";

const Status = () => {
    return(
        <select onChange={statusHandler}>
        <option value="all"> All</option>
        <option value="pending"> Pending </option>
        <option value="done"> Done </option>
      </select>
    )
}