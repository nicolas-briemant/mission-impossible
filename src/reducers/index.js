import { combineReducers } from 'redux';
import missions from './missions';

export default (initialState) => combineReducers({ missions }, initialState);
