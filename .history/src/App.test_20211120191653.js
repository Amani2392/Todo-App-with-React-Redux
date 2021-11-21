import reducers from './reducers';

test('reducers', () => {
  let state;
  state = reducers([], {type:'ADD_TODO',todo:{Title:'shopping',Description:'buy new shoes',done:false,id:679.2928278685333}});
  expect(state).toEqual([{Title:'shopping',Description:'buy new shoes',done:false,id:679.2928278685333}]);
});

test('reducers', () => {
    let state;
    state = reducers([{Title:'szvc',Description:'dfv',done:true,id:515.8198015211999}], {type:'REMOVE_TODO',todo:{Title:'szvc',Description:'dfv',done:true,id:515.8198015211999}});
    expect(state).toEqual([]);
  });
  