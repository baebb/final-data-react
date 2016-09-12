import { expect } from '../test_helper';
//types
import { TOP_FIVE_ACTIVITIES, GET_TRANSACTION } from '../../src/actions/types';
//action functions
import { topFive, getTransaction } from '../../src/actions/index';

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

        beforeEach(() => {
            action = getTransaction(testParentId);
        })

        it('has the correct type', () => {
            expect(action.type).to.equal( GET_TRANSACTION );
        })
        
        it('gets the correct transaction object', () => {
            expect(action.payload.id).to.equal(testParentId);
        })
    })
})