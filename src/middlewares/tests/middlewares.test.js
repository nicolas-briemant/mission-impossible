// import deepFreeze from 'deep-freeze';
import { firewall } from '..';
import * as actions from '../../actions';

describe('src | middlewares', () => {
  const next = action => action;
  test('action SELECT_MISSION', () => {
    const action = actions.selectMission(10);
    expect(firewall()(next)(action)).toEqual(action);
  });

  // test('action REMOVE_MISSION blocked action', () => {
  //   const action = actions.removeMission(10)
  //   expect(firewall()(next)(action)).toEqual(action);
  // });
});
