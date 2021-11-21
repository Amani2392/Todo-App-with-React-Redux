import reducers from "./reducers";

test("add", () => {
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

test("edit", () => {
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
        Title: "sadc",
        Description: "dsvc",
        done: false,
        id: 154.27873807268045,
      },
    }
  );
  expect(state).toEqual([
    { Title: "sadc", Description: "dsvc", done: false, id: 154.27873807268045 },
  ]);
});

test("done", () => {
  let state;
  state = reducers([], {
    type: "DONE_TODO",
    todo: {
      Title: "szvc",
      Description: "dfv",
      done: true,
      id: 515.8198015211999,
    },
  });
  expect(state).toEqual([]);
});
test('remove', () => {
    let state;
    state = reducers([], {type:'DONE_TODO',todo:{Title:'qqwqw111',Description:'11111',done:true,id:142.7704729117152}});
    expect(state).toEqual([]);
  });