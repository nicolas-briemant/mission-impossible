import { slice, sortBy, prop, map, reduce, find, propEq, uniq, reverse } from 'ramda';
import { createSelector } from 'reselect';

export const getMissionsPage = (pageSize = 20) => state => slice(0, pageSize, state.missions);

export const getMissionsDatas = state => {
  const { missions, companies, workers } = state;

  const missionsDatas = map(
    mission => ({
      id: mission.id,
      name: mission.name,
      client: getCompanyData(mission.clientId, companies),
      partner: mission.partnerId ? getCompanyData(mission.partnerId, companies) : undefined,
      manager: mission.managerId ? getWorkerName(mission.managerId, workers) : undefined,
      workers: getWorkersNames(mission.addenda, workers),
      status: getMissionStatus(mission.addenda),
      isSelected: mission.isSelected,
      startDate: getStartDate(mission.addenda),
      endDate: getEndDate(mission.addenda),
    }),
    missions,
  );

  return missionsDatas;
};

export const getCompanyData = (companieId, companies) => {
  const companie = find(propEq('id', companieId))(companies);

  return { name: companie.name, avatar: companie.avatar };
};

export const getWorkerName = (managerId, workers) => {
  const worker = find(propEq('id', managerId))(workers);

  return worker;
};

export const getWorkersNames = (addenda, workers) => {
  const workersNames = uniq(map(worker => getWorkerName(worker.workerId, workers), addenda));

  return workersNames;
};

export const getMissionStatus = addenda => {
  const status = reduce(
    (acc, worker) => {
      if (acc === 'In progress') return acc;

      const date = new Date(prop('endDate', worker));
      if (!date) return 'In progress';

      return date < new Date() ? 'Ended' : 'In progress';
    },
    'Ended',
    addenda,
  );
  return status;
};

export const getStartDate = addenda => {
  const startDate = reduce(
    (acc, worker) => {
      const date = new Date(prop('startDate', worker));

      return date < acc ? date : acc;
    },
    new Date(),
    addenda,
  );
  return startDate;
};

export const getEndDate = addenda => {
  //compose map / max
  const date = reduce(
    (acc, worker) => {
      const endDate = prop('endDate', worker);
      const newDate = endDate ? new Date(endDate) : new Date();

      return newDate > acc ? newDate : acc;
    },
    new Date(0),
    addenda,
  );
  return date;
};

export const sortMissions = (missions, filter) => {
  switch (filter.type) {
    case 'TOOGLE_SORT_MISSIONS_BY_NAMES':
      return filter.order ? sortBy(prop('name'), missions) : reverse(sortBy(prop('name'), missions));
    case 'SORT_MISSIONS_BY_STARTDATE':
      return filter.order ? sortBy(prop('startDate'), missions) : reverse(sortBy(prop('startDate'), missions));
    case 'SORT_MISSIONS_BY_ENDDATE':
      return filter.order ? sortBy(prop('endDate'), missions) : reverse(sortBy(prop('endDate'), missions));
    default:
      return missions;
  }
};

const getFilter = state => state.filter;

export const selectorMissions = createSelector(getMissionsDatas, getFilter, (missions, filter) =>
  sortMissions(missions, filter),
);
