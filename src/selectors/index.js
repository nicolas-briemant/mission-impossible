import { sortBy, prop, reverse, map } from 'ramda';
import { createSelector } from 'reselect';

const getMissions = state => state.missions;
const getCompanies = state => state.companies;
const getWorkers = state => state.workers;

const getListWorkers = (addenda, workers) => map(w => workers[w.workerId], addenda);

export const getDataMissions = createSelector([getMissions, getCompanies, getWorkers], (missions, companies, workers) =>
  map(
    mission => ({
      ...mission,
      companies: companies[mission.clientId],
      manager: workers[mission.managerId],
      workersList: getListWorkers(mission.addenda, workers),
    }),
    missions,
  ),
);

export const getSortByName = (missions, sortStatue) =>
  sortStatue ? sortBy(prop('name'), missions) : reverse(sortBy(prop('name'), missions));
export const getSortByAddenda = (missions, sortStatue) =>
  sortStatue ? sortBy(prop('addenda'), missions) : reverse(sortBy(prop('addenda'), missions));
