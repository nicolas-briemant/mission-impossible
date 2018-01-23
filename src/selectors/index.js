import { filter, sortBy, prop, map, reduce, find, propEq, uniq, reverse } from 'ramda';
import { createSelector } from 'reselect';
import moment from 'moment';

// const getMissionsPage = (pageSize = 20) => state => slice(0, pageSize, state.missions);

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

const getCompanyData = (companieId, companies) => {
  const companie = find(propEq('id', companieId))(companies);

  return companie;
};

const getWorkerName = (managerId, workers) => {
  const worker = find(propEq('id', managerId))(workers);

  return worker;
};

const getWorkersNames = (addenda, workers) => {
  const workersNames = uniq(map(worker => getWorkerName(worker.workerId, workers), addenda));

  return workersNames;
};

const getMissionStatus = addenda => {
  const status = reduce(
    (acc, worker) => {
      if (acc === 'In progress') return acc;

      const date = moment(prop('endDate', worker));
      if (!date) return 'In progress';

      return date < moment() ? 'Ended' : 'In progress';
    },
    'Ended',
    addenda,
  );
  return status;
};

const getStartDate = addenda => {
  const date = reduce(
    (acc, worker) => {
      const newDate = moment(prop('startDate', worker));
      return newDate.isBefore(acc) ? newDate : acc;
    },
    moment(),
    addenda,
  );
  return date;

  // const tmp = compose(moment, prop('startDate'));
  // console.log(max(map(tmp, addenda)))
  // return max(map(moment(prop('startDate')), addenda));
};

const getEndDate = addenda => {
  //compose map / max
  const date = reduce(
    (acc, worker) => {
      const newDate = moment(prop('endDate', worker));
      return newDate.isAfter(acc) ? newDate : acc;
    },
    moment(0),
    addenda,
  );
  return date;
};

const sortMissions = (missions, order) => {
  if (!order.type) return missions;
  return order.direction ? sortBy(prop([order.type]), missions) : reverse(sortBy(prop([order.type]), missions));
};

const myFilterMissions = (missions, filterMissions) => {
  return filterMissions.type ? filter(mission => mission.status === filterMissions.type, missions) : missions;
};

const getOrder = state => state.order;

export const selectorMissions = createSelector(getMissionsDatas, getOrder, (missions, order) =>
  sortMissions(missions, order),
);

const getFilter = state => state.filterMissions;

export const selector = createSelector(selectorMissions, getFilter, (missions, filterMissions) =>
  myFilterMissions(missions, filterMissions),
);
