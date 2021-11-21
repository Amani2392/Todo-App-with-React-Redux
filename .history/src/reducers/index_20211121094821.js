import { useSelector } from "react-redux";
import { combineReducers } from "redux";

let initialState = [];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      state = [...state, action.todo];
      return [...state];

    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.todo.id ? action.todo : todo
      );

    case "REMOVE_TODO":
      return state.filter((todo) => todo !== action.todo);

    case "DONE_TODO":
      state.map((todo) =>
        todo.id === action.todo.id
          ? (action.todo.done = !action.todo.done)
          : todo
      );
      return [...state];

    case "SET_LOCALSTORAGE":
      return (state = action.localStorage);
    default:
      return [...state];
  }
};

let done = [];
const statusSwitch = (state = done, action) => {
  const todoState = useSelector((state) => state);
  switch (action.type) {
    case "DONE":
      state(todoState.filter((todo) => todo.done === true));
      break;
    case "PENDING":
      state(todoState.filter((todo) => todo.done === false));
      break;
    default:
      state(todoState);
      break;
  }
};

const rootReducer = combineReducers({
  todoReducer,
  statusSwitch,
});

export default rootReducer;
