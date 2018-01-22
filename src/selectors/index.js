import { map, reverse, prop, sortBy, sort, reduce } from 'ramda';
import { createSelector } from 'reselect';
import moment from 'moment';

// export const getMissionsPage = (pageSize = 19) => state => slice(0, pageSize, state.missions);

// sort by name (ascendant, descendant)
// sort by endDate and endDate
const getWorkers = state => state.workers;
const getMissions = state => state.missions;
const getCompanies = state => state.companies;
const getSortTypeAndDirection = state => state.sort;

const getSortByName = (missions, direction) =>
  direction ? sortBy(prop('name'), missions) : reverse(sort(prop('name'), missions));
const getSortDate = (missions, direction) =>
  direction ? sortBy(prop('startDate'), missions) : reverse(sortBy(prop('startDate'), missions));

const getSort = (missions, { type, direction }) => {
  switch (type) {
    case 'NAME':
      return getSortByName(missions, direction);
    case 'START_DATE':
      return getSortDate(missions, direction);
    case 'END_DATE':
      return getSortDate(missions, direction);
    default:
      return missions;
  }
};

const getEnhancedMissions = createSelector(getMissions, getCompanies, getWorkers, (missions, companies, workers) =>
  map(
    ({ clientId, partnerId, managerId, addenda, ...rest }) => ({
      clientId,
      partnerId,
      managerId,
      client: companies[clientId],
      partner: companies[partnerId] ? companies[partnerId] : null,
      manager: workers[managerId],
      addenda: map(
        ({ workerId, ...restAddenda }) => ({
          workerId,
          worker: workers[workerId],
          ...restAddenda,
        }),
        addenda,
      ),
      startDate: reduce((acc, { startDate }) => (moment(startDate) < acc ? moment(startDate) : acc), moment(), addenda),
      endDate: reduce((acc, { endDate }) => (moment(endDate) > acc ? moment(endDate) : acc), moment(0), addenda),
      ...rest,
    }),
    missions,
  ),
);

export const getSortedMissions = createSelector(
  getEnhancedMissions,
  getSortTypeAndDirection,
  (missions, sortTypeAndDirection) => getSort(missions, sortTypeAndDirection),
);

// export const getSortedMissions = createSelector(
//   getEnhancedMissions,
//   (missions) => missions
// )

// start date = date la plus vielle
// start date ascendant descendant

// end date = date la plus vielle
// end date ascendant descendant
