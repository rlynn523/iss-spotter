import { combineReducers } from 'redux';
import LocationReducer from './location';
import StatsReducer from './stats';

export default combineReducers({
    LocationReducer,
    StatsReducer
});
