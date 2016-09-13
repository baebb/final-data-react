import { expect } from '../test_helper';
//types
import { TOP_FIVE_ACTIVITIES, GET_TRANSACTION, GET_MERCHANT } from '../../src/actions/types';
//action functions
import { topFive, getTransaction, getMerchantCategory } from '../../src/actions/index';

describe('Actions', () => {
    describe('Get top five activities', () => {
        let action;

        beforeEach(() => {
            action = topFive();
        })

        it('has the correct type', () => {
            expect(action.type).to.equal( TOP_FIVE_ACTIVITIES );
        })

        it('returns 5 activities', () => {
            expect(action.payload.length).to.equal(5);
        })
    })

    describe('Get transaction', () => {
        let action;
        const testParentId = 3817;


        it('has the correct type', () => {
            action = getTransaction(testParentId);
            expect(action.type).to.equal( GET_TRANSACTION );
        })
        
        it('gets the correct transaction object', () => {
            action = getTransaction(testParentId);
            expect(action.payload.id).to.equal(testParentId);
        })

        it('handles unknown id', () => {
            action = getTransaction(131231234);
            expect(action.payload).to.equal('Not found')
        })
    })

    describe('Get merchant', () => {
        let action;
        const testMcc = 1520;

        it('has the correct type', () => {
            action = getMerchantCategory(testMcc);
            expect(action.type).to.equal( GET_MERCHANT );
        })

        it('gets the correct merchant object', () => {
            action = getMerchantCategory(testMcc);
            expect(Number(action.payload.mcc)).to.equal(testMcc);
        })

        it('handles unknown mcc', () => {
            action = getMerchantCategory(131231234);
            expect(action.payload).to.equal('Not found')
        })
    })
})