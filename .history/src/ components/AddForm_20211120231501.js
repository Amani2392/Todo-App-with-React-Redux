import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import { useSelector } from "react-redux";

const AddForm = () => {
  const todoState = useSelector((state) => state);
  const [titleState, setTitleState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [status, setstatus] = useState("all");
  const [filterdTodos, setFilterdTodos] = useState([]);

  const dispatch = useDispatch();
  const addTitleHandler = (event) => {
    setTitleState(event.target.value);
  };
  const addDescriptionHandler = (event) => {
    setDescriptionState(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        Title: titleState,
        Description: descriptionState,
        done: false,
        id: Math.random() * 1000,
      })
    );
    setTitleState("");
    setDescriptionState("");
  };
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
    <form className="form__container" onSubmit={submitHandler}>
      <input
        value={titleState}
        onChange={addTitleHandler}
        type="text"
        className="form__title-input"
        placeholder="Title"
        required
      />
      <input
        value={descriptionState}
        onChange={addDescriptionHandler}
        type="text"
        className="form__desc-input"
        placeholder="Description"
        required
      />
      <input
        type="submit"
        value="Add task"
        className="form__submit-btn"
      ></input>
      <select onChange={statusHandler}>
        <option value="all"> All</option>
        <option value="pending"> Pending </option>
        <option value="done"> Done </option>
      </select>
    </form>
  );
};

export default AddForm;
