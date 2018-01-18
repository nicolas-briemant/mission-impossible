// export const firewall = () => next => action => {
//   const FORBIDDEN_ACTION_TYPES = ['BLOCK_ACTION'];
//
//   if (!FORBIDDEN_ACTION_TYPES.includes(action.type)) return next(action);
//
//   return next(blockAction(action.type));
// };
//
describe('Middleware', () => {
  test('shouldnt block an action', () => {
    //     const FORBIDDEN_ACTION_TYPES = ['BLOCK_ACTION'];
    //
    //     expect().toEqual();
  });
  //   test('should block an action', () => {
  //     const FORBIDDEN_ACTION_TYPES = ['BLOCK_ACTION'];
  //
  //     expect().toEqual();
  //   });
});
