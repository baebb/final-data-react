import { expect } from '../test_helper';

import { GET_MERCHANT } from '../../src/actions/types';
import merchantReducer from '../../src/reducers/reducer_merchants';

describe('Transaction reducer', () => {
    it('handles action with unknown type', () => {
        const action = { type: 'GET_REKT', payload: { test: "data" }}
        expect(merchantReducer({}, action)).to.eql({});
    });

    it('handles action of GET_MERCHANT', () => {
        const action = { type: GET_MERCHANT, payload: { test: "data" }}
        expect(merchantReducer({}, action)).to.eql({ test: "data" });
    })
})