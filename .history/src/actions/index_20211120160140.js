export const addTodo = (todo) => ({
  type: "ADD_TODO",
  todo,
});

export const editTodo = (todo) => ({
  type: "EDIT_TODO",
  todo,
});

export const removeTodo = (todo) => ({
  type: "REMOVE_TODO",
  todo,
});

export const doneTodo = (todo) => ({
  type: "DONE_TODO",
  todo,
});
