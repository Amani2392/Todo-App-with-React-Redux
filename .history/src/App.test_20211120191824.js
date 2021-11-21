import reducers from './reducers';

test('reducers', () => {
  let state;
  state = reducers([], {type:'ADD_TODO',todo:{Title:'shopping',Description:'buy new shoes',done:false,id:679.2928278685333}});
  expect(state).toEqual([{Title:'shopping',Description:'buy new shoes',done:false,id:679.2928278685333}]);
});

test('reducers1', () => {
    let state;
    state = reducers([{Title:'shopping',Description:'buy new pants',done:false,id:154.27873807268045}], {type:'EDIT_TODO',todo:{Title:'sadc',Description:'dsvc',done:false,id:154.27873807268045}});
    expect(state).toEqual([{Title:'sadc',Description:'dsvc',done:false,id:154.27873807268045}]);
  });

test('reducers2', () => {
    let state;
    state = reducers([], {type:'DONE_TODO',todo:{Title:'szvc',Description:'dfv',done:true,id:515.8198015211999}});
    expect(state).toEqual([]);
  });
  test('reducers3', () => {
    let state;
    state = reducers([{Title:'szvc',Description:'dfv',done:true,id:515.8198015211999}], {type:'REMOVE_TODO',todo:{Title:'szvc',Description:'dfv',done:true,id:515.8198015211999}});
    expect(state).toEqual([]);
  });
  