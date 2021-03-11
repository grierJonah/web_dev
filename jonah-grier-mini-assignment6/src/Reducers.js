import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import DiceSumReducer from './DiceSumReducer';
import AddDiceReducer from './AddDiceReducer';

export default combineReducers({
    count: CounterReducer,              // { type: "ROLL" }
    total_sum: DiceSumReducer,          // { type: "SUM" }
    dice: AddDiceReducer,       // { type: "ADD" }
})