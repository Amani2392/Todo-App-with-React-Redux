let initialState = [];
const todoReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'ADD_TODO':
      state = [...state, action.todo]
      return [...state];

    case 'EDIT_TODO':
      return state.map(todo => todo.id === action.todo.id ? action.todo : todo)

    case 'REMOVE_TODO':
      return state.filter(todo => todo !== action.todo);

    case 'DONE_TODO':
      state.map(todo => todo.id === action.todo.id ? action.todo.done = !action.todo.done : todo)
      return [...state];

    case 'SET_LOCALSTORAGE':
      console.log(action.localStorage)
     return state = action.localStorage;
    default:
      return [...state];
  }
}

export default todoReducer;
