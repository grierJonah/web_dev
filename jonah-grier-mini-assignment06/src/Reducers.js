import { combineReducers } from 'redux';
import SumReducer from './SumReducer';

export default combineReducers({
    sum: SumReducer,
})