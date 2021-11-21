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
console.log(todoState);
let done = [];
const done = (state = done, action) => {
  switch (action.type) {
    case "done":
      state(todoState.filter((todo) => todo.done === true));
      break;
    case "pending":
      state(todoState.filter((todo) => todo.done === false));
      break;
    default:
      state(todoState);
      break;
  }
}

export default todoReducer;
