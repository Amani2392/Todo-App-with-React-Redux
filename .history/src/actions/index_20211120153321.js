export const addTodo = (todo) => ({
  type: "ADD_TODO",
  todo,
});

export const EditTodo = (todo) => ({
  type: "EDIT_TODO",
  todo,
});

export const RemoveTodo = (todo) => ({
  type: "REMOVE_TODO",
  todo,
});

export const DoneTodo = (todo) => ({
  type: "DONE_TODO",
  todo,
});
