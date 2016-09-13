import {transactionData} from '../data/transaction_data';
import {activityData} from '../data/activity_data';
import {mccData} from '../data/mcc_codes';
import {TOP_FIVE_ACTIVITIES, GET_TRANSACTION, GET_MERCHANT} from './types';


export function topFive() {
    const highestFive = activityData
        .filter((x) => {
            return x.name !== "Payment Reversal"
        })
        .filter((x) => {
            return x.amount > 0
        })
        .sort((a, b) => {
            return b.amount - a.amount
        })
        .slice(0, 5);

    return {
        type: TOP_FIVE_ACTIVITIES,
        payload: highestFive
    }
}

export function getTransaction(parentId) {
    let transaction;

    if (transactionData.find((x) => {
            return x.id == parentId
        })) {
        transaction = transactionData.find((x) => {
            return x.id == parentId
        })
    }
    else {
        transaction = 'Not found';
    }

    return {
        type: GET_TRANSACTION,
        payload: transaction
    }
}

export function getMerchantCategory(mcc) {
    let merchant;

    if (mccData.find((x) => {return Number(x.mcc) == mcc})) {
        merchant = mccData.find((x) => {
            return Number(x.mcc) == mcc
        })
    } else {
        merchant = 'Not found';
    }

    return {
        type: GET_MERCHANT,
        payload: merchant
    }
}