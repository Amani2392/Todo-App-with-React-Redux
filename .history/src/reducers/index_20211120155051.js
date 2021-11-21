const todoReducer = (state = [], action) => {
    // const whatever = state;
    switch(action.type){
      case 'ADD_TODO':
        state = [...state, action.todo]
        return [...state];

      case 'EDIT_TODO':
        state.map( todo => todo.id === action.id ? action.todo : todo)
        return [...state];

      case 'REMOVE_TODO':
        console.log(action.todo, action, action.todo.id);
        state.filter( todo => todo !== action.todo)
        return [...state];

      case 'DONE_TODO':
        state.map( todo => todo.id === action.todo.id ? {...todo, done: !todo.done} : todo)       
         return [...state];
      default:
       return [...state];
    }
}

export default todoReducer;