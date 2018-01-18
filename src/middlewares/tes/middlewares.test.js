// import deepFreeze from 'deep-freeze';
// import { firewall } from '..';
// import * as actions from '../../actions';

// describe('src | middlewares', () => {
//   test('action REMOVE_MISSION', () => {
//     const action = { type: actions.REMOVE_MISSION, payload: { typeBlocked: REMOVE_MISSION }};
//     const next = (action) => action;
//     deepFreeze(action);
//     const expected = {payload: {typeBlocked: "REMOVE_MISSION"}, type: "BLOCKED_ACTION"};
//     expect(firewall()(next)(action.type)).toEqual(expected);
//   });
// });
