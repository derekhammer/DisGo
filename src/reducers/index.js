import { combineReducers } from 'redux';
import liveSelectionReducer from './liveSelectionReducer';

const rootReducer = combineReducers({
    liveSelected: liveSelectionReducer
});

export default rootReducer;