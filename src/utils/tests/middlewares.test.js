import { removeMission, toggleMission, blockedAction } from '../../actions';
import { firewall } from '../../middlewares';

describe('middlewares', () => {
  it('firewall', () => {
    const setAction = toggleMission(27);
    const next = action => action;

    expect(firewall()(next)(setAction)).toEqual(setAction);
  });

  it('firewall blocked action', () => {
    const setAction = removeMission(27);
    const next = action => action;
    const expected = blockedAction('REMOVE_MISSION');

    expect(firewall()(next)(setAction)).toEqual(expected);
  });
});
