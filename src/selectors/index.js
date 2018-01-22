import { sortBy, reverse, map, prop } from 'ramda';
import { createSelector } from 'reselect';

const getMissions = state => state.missions;
const getCompanies = state => state.companies;
const getWorkers = state => state.workers;
const getSortValues = state => state.sort;
const getListWorkers = (addenda, workers) => map(w => workers[w.workerId], addenda);

const getStartDate = addenda => {
  const array = [];
  addenda.map(e => (e.startDate ? array.push(new Date(e.startDate)) : array.push(new Date())));
  return array.reduce((a, b) => {
    return a < b ? a : b;
  });
};

const getEndDate = addenda => {
  const array = [];
  addenda.map(e => (e.endDate ? array.push(new Date(e.endDate)) : array.push(new Date())));
  return array.reduce((a, b) => {
    return a > b ? a : b;
  });
};

const getStatusMission = addenda => {
  const array = [];
  addenda.map(e => (e.endDate ? array.push(false) : array.push(true)));
  return array.includes(true);
};

export const getDataMissions = createSelector([getMissions, getCompanies, getWorkers], (missions, companies, workers) =>
  map(
    mission => ({
      ...mission,
      companies: companies[mission.clientId],
      manager: workers[mission.managerId],
      workersList: getListWorkers(mission.addenda, workers),
      startDate: getStartDate(mission.addenda),
      endDate: getEndDate(mission.addenda),
      open: getStatusMission(mission.addenda),
    }),
    missions,
  ),
);

export const filterMissions = (state, missions) => {
  let tmpMissions = missions;
  if (state.filterMissions.missionOpen) tmpMissions = tmpMissions.filter(mission => mission.open === true, tmpMissions);
  if (state.filterMissions.missionFinish)
    tmpMissions = tmpMissions.filter(mission => mission.open === false, tmpMissions);
  return tmpMissions;
};

export const sortMissions = (missions, { type, direction }) => {
  if (type === 'SORT_NAME') return getSortByName(missions, direction);
  else if (type === 'SORT_DATE_START') return getSortByStart(missions, direction);
  else if (type === 'SORT_DATE_END') return getSortByEnd(missions, direction);
  return missions;
};

export const getSortedMissions = createSelector(getDataMissions, getSortValues, (missions, sort) =>
  sortMissions(missions, sort),
);

export const getSortByName = (missions, sortStatue) =>
  sortStatue ? sortBy(prop('name'), missions) : reverse(sortBy(prop('name'), missions));
export const getSortByStart = (missions, sortStatue) =>
  sortStatue ? sortBy(prop('startDate'), missions) : reverse(sortBy(prop('startDate'), missions));
export const getSortByEnd = (missions, sortStatue) =>
  sortStatue ? sortBy(prop('endDate'), missions) : reverse(sortBy(prop('endDate'), missions));
