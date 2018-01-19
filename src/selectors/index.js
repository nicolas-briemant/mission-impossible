import { sortBy, prop, reverse } from 'ramda';

// export const getMissionsPage = (pageSize = 20) => (state) => slice(0, pageSize, state.missions);

// export const getMissionChunk = (state) => slice(0, 20, state.missions);

export const getSortByName = (state, sortStatue) =>
  sortStatue ? sortBy(prop('name'), state.missions) : reverse(sortBy(prop('name'), state.missions));
export const getSortByAddenda = (state, sortStatue) =>
  sortStatue ? sortBy(prop('addenda'), state.missions) : reverse(sortBy(prop('addenda'), state.missions));
