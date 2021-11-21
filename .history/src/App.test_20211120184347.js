import reducers from '../../reducers';

test('reducers', () => {
  let state;
  state = reducers([], {type:'ADD_TODO',todo:{Title:'shopping',Description:'buy new shoes',done:false,id:679.2928278685333}});
  expect(state).toEqual([{Title:'shopping',Description:'buy new shoes',done:false,id:679.2928278685333}]);
});
