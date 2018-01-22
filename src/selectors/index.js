import { sortBy, find, propEq, uniq, prop, map, length, compose } from 'ramda';
import { createSelector } from 'reselect';

export const getSortByName = state => sortBy(prop('name'), state.missions);
//export const getMissionPage = (state) =>slice(0,20,state.missions)
//export const getMissionPage = (pagSize = 20) => (state) =>slice(0,pagSize,state.missions)
//const myMapp = () => map(x=>x.addenda);
//const getLength = ()=> length(myMapp);
//export const sortByAddenda = (state) =>sortBy(getLength,state.missions);
export const sortByAddenda = state => sortBy(compose(length, prop('addenda')), state.missions);

export const getAllMissions = state => state.missions;
export const getAllWorkers = state => state.workers;
export const getAllCompanies = state => state.companies;

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
        client: getClient(companies, mission.clientId).name,
        clientLogo: getClient(companies, mission.clientId).avatar.src,
        partnerLogo: mission.partnerId ? getPartner(companies, mission.partnerId).avatar.src : undefined,
        partner: mission.partnerId ? getPartner(companies, mission.partnerId).name : undefined,
        managerFirstName: getWorkers(workers, mission.managerId).firstName,
        managerLastName: getWorkers(workers, mission.managerId).lastName,
        developers: uniq(map(worker => getWorkers(workers, worker.workerId), mission.addenda)),
      }),
      missions,
    ),
);
