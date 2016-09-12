import { expect } from '../test_helper';
//types
import { GET_TRANSACTION } from '../../src/actions/types';
//action functions
import { getTransaction } from '../../src/actions/index';

describe('Actions', () => {
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