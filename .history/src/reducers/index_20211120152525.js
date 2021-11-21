const todoReducer = (state = [], action) => {
    // const whatever = state;
    switch(action.type){
      case 'ADD_TODO':
        state = [...state, action.todo]
        return [...state];

      case 'EDIT_TODO':
        state.filter( todo => todo.id !== task.id)
        return [...state];

      case 'REMOVE_TODO':
        state.filter( todo => todo.id !== task.id)
        return [...state];

      case 'DONE_TODO':
        state.map( todo => todo.id === task.id ? {...todo, done: !todo.done} : todo)       
         return [...state];
      default:
       return [...state]
    }
}