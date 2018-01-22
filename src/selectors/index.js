import { filter, map, sortBy, prop, identity, reverse, compose, length } from 'ramda';
import { createSelector } from 'reselect';

export const getMissions = (state) => state.missions.collection;
export const getCompanies = (state) => state.companies;
export const getWorkers = (state) => state.workers;
export const getMissionSort = (state) => state.missions.sort;

export const getClient = (clientId, companies) => companies[clientId];
export const getPartner = (partnerId, companies) => companies[partnerId];
export const getWorker = (workerId, workers) => workers[workerId];

export const getSelectedMissions = createSelector(getMissions, filter(prop('isSelected')));

export const getEnhancedMissions = createSelector(
  getMissions, getCompanies, getWorkers,
  (missions, companies, workers) => map(
    ({ clientId, partnerId, managerId, ...rest}) => ({
      ...rest,
      client: getClient(clientId, companies),
      partner: getPartner(partnerId, companies),
      manager: getWorker(managerId, workers),
    }),
    missions
  )
);

export const getSortedMissions = createSelector(
  getEnhancedMissions, getMissionSort,
  (missions, sort) => sortBy(
    compose(
      prop(sort.type),
      sort.direction ? identity : reverse
    )
  )(missions)
);

export const getMissionTotalCount = createSelector(getMissions, length);
export const getMissionSelectedCount = createSelector(getSelectedMissions, length);
export const getMissionCount = createSelector(getSortedMissions, length);
