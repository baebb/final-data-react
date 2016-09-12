import { combineReducers } from 'redux';

import ActivitiesReducer from './reducer_activities';
import TransactionReducer from './reducer_transactions';

const rootReducer = combineReducers({
    largestActivities: ActivitiesReducer,
    activeTransaction: TransactionReducer
});

export default rootReducer;
