import reducers from "./reducers";
test('It saves to localStorage', () => {
    let state;
    state = reducers([], {type:'SET_LOCALSTORAGE',localStorage:[{Title:'Shpooing',Description:'buy new boots',done:false,id:490.6919150106825}]});
    expect(state).toEqual([{Title:'Shpooing',Description:'buy new boots',done:false,id:490.6919150106825}]);
  });
test("It adds todo", () => {
  let state;
  state = reducers([], {
    type: "ADD_TODO",
    todo: {
      Title: "shopping",
      Description: "buy new shoes",
      done: false,
      id: 679.2928278685333,
    },
  });
  expect(state).toEqual([
    {
      Title: "shopping",
      Description: "buy new shoes",
      done: false,
      id: 679.2928278685333,
    },
  ]);
});

test("It Edits todo", () => {
  let state;
  state = reducers(
    [
      {
        Title: "shopping",
        Description: "buy new pants",
        done: false,
        id: 154.27873807268045,
      },
    ],
    {
      type: "EDIT_TODO",
      todo: {
        Title: "shopping",
        Description: "buy new socks",
        done: false,
        id: 154.27873807268045,
      },
    }
  );
  expect(state).toEqual([
    { Title: "shopping", Description: "buy new socks", done: false, id: 154.27873807268045 },
  ]);
});

test("It toggles done todo", () => {
  let state;
  state = reducers([], {
    type: "DONE_TODO",
    todo: {
      Title: "shopping",
      Description: "buy makeup",
      done: true,
      id: 515.8198015211999,
    },
  });
  expect(state).toEqual([]);
});
test('It removes todo', () => {
    let state;
    state = reducers([], {type:'DONE_TODO',todo:{Title:'shopping',Description:'buy makeup',done:true,id:142.7704729117152}});
    expect(state).toEqual([]);
  });