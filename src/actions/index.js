import { transactionData } from '../data/transaction_data';
import { activityData } from '../data/activity_data';
import { TOP_FIVE_ACTIVITIES, GET_TRANSACTION } from './types';

export function topFive() {
    const highestFive = activityData
        .filter((x) => {return x.name !== "Payment Reversal"})
        .filter((x) => {return x.amount > 0})
        .sort((a,b) => {return b.amount - a.amount})
        .slice(0,5);

    return {
        type: TOP_FIVE_ACTIVITIES,
        payload: highestFive
    }
}

export function getTransaction(parentId) {
    const transaction = transactionData.find((x) => {return x.id == parentId})

    return {
        type: GET_TRANSACTION,
        payload: transaction
    }
}