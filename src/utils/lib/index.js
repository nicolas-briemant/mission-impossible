import { reduce } from 'ramda';

export const arrayToObject = collection => reduce((memo, item) => ({ ...memo, [item.id]: item }), {}, collection);
