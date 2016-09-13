import { combineReducers } from 'redux';

import ActivitiesReducer from './reducer_activities';
import TransactionReducer from './reducer_transactions';
import MerchantReducer from './reducer_merchants'

const rootReducer = combineReducers({
    largestActivities: ActivitiesReducer,
    activeTransaction: TransactionReducer,
    activeMerchant: MerchantReducer
});

export default rootReducer;
