import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import DiceSumReducer from './DiceSumReducer';

export default combineReducers({
    count: CounterReducer,              // { type: "ROLL" }
    total_sum: DiceSumReducer,          // { type: "SUM" }
})