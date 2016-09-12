import { expect } from '../test_helper';

import { GET_TRANSACTION } from '../../src/actions/types';
import transactionReducer from '../../src/reducers/reducer_transactions';

describe('Transaction reducer', () => {
    it('handles action with unknown type', () => {
        const action = { type: 'GET_REKT', payload: { test: "data" }}
        expect(transactionReducer({}, action)).to.eql({});
    });

    it('handles action of GET_TRANSACTION', () => {
        const action = { type: GET_TRANSACTION, payload: { test: "data" }}
        expect(transactionReducer({}, action)).to.eql({ test: "data" });
    })
})