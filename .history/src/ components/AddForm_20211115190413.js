import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const AddForm = ({
  titleState,
  setTitleState,
  descriptionState,
  setDescriptionState,
}) => {
  const dispatch = useDispatch();

  const addTitleHandler = (event) => {
    setTitleState(event.target.value);
  };
  const addDescriptionHandler = (event) => {
    setDescriptionState(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
dispatch(addTodo({ titleState, descriptionState, done: false, id: Math.random() * 1000, }));
    setTitleState("");
    setDescriptionState("");
  };

  return (
    <form className="form__container" onSubmit={submitHandler}>
      <input
        value={titleState}
        onChange={addTitleHandler}
        type="text"
        className="form__title-input"
        placeholder="Title"
      />
      <input
        value={descriptionState}
        onChange={addDescriptionHandler}
        type="text"
        className="form__desc-input"
        placeholder="Description"
      />
      <input
        type="submit"
        value="Add task"
        className="form__submit-btn"
      ></input>
    </form>
  );
};

export default AddForm;
