import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddForm = () => {
  const [titleState, setTitleState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
 const [status, setstatus] = useState('pending');
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
    event.preventDefault(e.target.value);
  }

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
        <option> all </option>
        <option> done </option>
        <option>pending </option>
      </select>
    </form>
  );
};

export default AddForm;
