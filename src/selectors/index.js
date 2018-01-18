import { sortBy, prop, length, compose } from 'ramda';

export const sortByName = state => sortBy(prop('name'), state.missions);

//export const getMissionPage = (state) =>slice(0,20,state.missions)
//export const getMissionPage = (pagSize = 20) => (state) =>slice(0,pagSize,state.missions)
//const myMapp = () => map(x=>x.addenda);
//const getLength = ()=> length(myMapp);
//export const sortByAddenda = (state) =>sortBy(getLength,state.missions);
export const sortByAddenda = state => sortBy(compose(length, prop('addenda')), state.missions);
