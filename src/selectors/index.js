import { sortBy, find, propEq, uniq, prop, map, max, reverse } from 'ramda';
import { createSelector } from 'reselect';

export const getSortMissions = (missions, nameIsSorted, endDateIsSorted, startDateIsSorted) => {
  if (nameIsSorted === true) {
    return sortBy(prop('name'), missions);
  } else if (nameIsSorted === false) {
    return reverse(sortBy(prop('name'), missions));
  }
  if (endDateIsSorted === true) {
    return sortBy(prop('endDate'), missions);
  } else if (endDateIsSorted === false) {
    return reverse(sortBy(prop('endDate'), missions));
  }
  if (startDateIsSorted === true) {
    return sortBy(prop('startDate'), missions);
  } else if (startDateIsSorted === false) {
    return reverse(sortBy(prop('startDate'), missions));
  }

  return missions;
};
//export const getMissionPage = (state) =>slice(0,20,state.missions)
//export const getMissionPage = (pagSize = 20) => (state) =>slice(0,pagSize,state.missions)
//const myMapp = () => map(x=>x.addenda);
//const getLength = ()=> length(myMapp);
//export const sortByAddenda = (state) =>sortBy(getLength,state.missions);

export const getAllMissions = state => state.missions;
export const getAllWorkers = state => state.workers;
export const getAllCompanies = state => state.companies;
export const getNameSortedState = state => state.nameIsSorted;
export const getEndDateState = state => state.endDateIsSorted;
export const getStartDateState = state => state.startDateIsSorted;

export const getClient = (companies, cliendId) => find(propEq('id', cliendId))(companies);
export const getPartner = (companies, partnerId) => find(propEq('id', partnerId))(companies);
export const getWorkers = (workers, managerId) => find(propEq('id', managerId))(workers);

export const getComposedSelector = createSelector(
  getAllMissions,
  getAllCompanies,
  getAllWorkers,
  (missions, companies, workers) =>
    map(
      mission => ({
        ...mission,
        client: getClient(companies, mission.clientId),
        partner: mission.partnerId ? getPartner(companies, mission.partnerId) : undefined,
        manager: getWorkers(workers, mission.managerId),
        developers: uniq(map(worker => getWorkers(workers, worker.workerId), mission.addenda)),
        startDate: max(...map(date => date.startDate, mission.addenda)),
        endDate: max(...map(date => date.endDate, mission.addenda)),
      }),
      missions,
    ),
);

export const missionsSelector = createSelector(
  getComposedSelector,
  getNameSortedState,
  getEndDateState,
  getStartDateState,
  (missions, nameIsSorted, endDateIsSorted, startDateIsSorted) =>
    getSortMissions(missions, nameIsSorted, endDateIsSorted, startDateIsSorted),
);
