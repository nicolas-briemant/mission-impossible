import { sortBy, prop, reverse, find, propEq } from 'ramda';

// export const getMissionsPage = (pageSize = 20) => (state) => slice(0, pageSize, state.missions);

// export const getMissionChunk = (state) => slice(0, 20, state.missions);

export const getSortByName = (state, sortStatue) =>
  sortStatue ? sortBy(prop('name'), state.missions) : reverse(sortBy(prop('name'), state.missions));
export const getSortByAddenda = (state, sortStatue) =>
  sortStatue ? sortBy(prop('addenda'), state.missions) : reverse(sortBy(prop('addenda'), state.missions));

const getCompaniesName = (mission, state) => find(propEq('_id', mission.clientId))(state.companies).name;
const getPartnerName = (mission, state) => {
  const res = find(propEq('_id', mission.partnerId))(state.companies);
  return res ? res.name : undefined;
};
const getManagersName = mission => {
  mission.addenda.map(x => x);
};

const getData = (mission, state) => {
  return {
    ...mission,
    clientName: getCompaniesName(mission, state),
    partnerName: getPartnerName(mission, state),
    manager: getManagersName(mission),
  };
};

export const getDataMissions = state => {
  return state.missions.map(x => getData(x, state));
};
