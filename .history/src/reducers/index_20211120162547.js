const todoReducer = (state = [], action) => {
    // const whatever = state;
    switch(action.type){

      case 'ADD_TODO':
        state = [...state, action.todo]
        return [...state];

      case 'EDIT_TODO':
        state.map( todo => todo.id === action.todo.id ? action.todo : todo)
        return [...state];

      case 'REMOVE_TODO':
       return state.filter( todo => todo!== action.todo);

      case 'DONE_TODO':
        state.map( todo => todo.id === action.todo.id ? action.todo.done = !action.todo.done : todo)       
         return [...state];
         
      default:
       return [...state];
    }
}

export default todoReducer;
