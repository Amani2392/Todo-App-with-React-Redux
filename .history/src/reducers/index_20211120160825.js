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
        console.log('sasasasass', action.todo, action, action.todo.id);
        state.filter( todo => todo.id !== action.todo.id);
        return [...state];

      case 'DONE_TODO':
        console.log('DONE:', action, action.todo, action.todo.done, action.todo.id)
        state.map( todo => todo.id === action.todo.id ? {...todo, done: true} : todo)       
         return [...state];
      default:
       return [...state];
    }
}

export default todoReducer;
