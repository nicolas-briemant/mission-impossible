import { slice, map } from 'ramda';
import { createSelector } from 'reselect';

export const getMissionsPage = (pageSize = 20) => (state) => slice(0, pageSize, state.missions);

export const getMissions = (state) => state.missions;
export const getCompanies = (state) => state.companies;
export const getWorkers = (state) => state.workers;

export const getClient = (clientId, companies) => companies[clientId];
export const getPartner = (partnerId, companies) => companies[partnerId];
export const getWorker = (workerId, workers) => workers[workerId];

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

/*
mission:
name of mission
name of client + logo (img) (company)
name of partner + logo (img) (company)
fname lname of manager (worker)
list of addenda: [fname lname,] (workers)
icon status of mission (ended or in progress)

import { createSelector } from 'reselect';

const getSelector1 = (state) => state.missions
const getSelector2 = (state) => state.workers
const getComposedSelector = createSelector(
  getSelector1, getSelector2,
  (missions, workers) => ??
);

state
missions -> workers companies

selectors
missions
workers
companies

mission + workers(id) + 
*/