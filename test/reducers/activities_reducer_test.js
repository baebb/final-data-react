import { expect } from '../test_helper';

import { TOP_FIVE_ACTIVITIES } from '../../src/actions/types';
import activitiesReducer from '../../src/reducers/reducer_activities';

describe('Activities reducer', () => {
    it('handles action with unknown type', () => {
        const action = { type: 'GET_REKT', payload: { test: "data" }}
        expect(activitiesReducer([], action)).to.eql([]);
    })

    it('handles action of TOP_FIVE_ACTIVITIES', () => {
        const action = { type: TOP_FIVE_ACTIVITIES, payload: [{ test: "data" }]};
        expect(activitiesReducer([], action)).to.eql([{ test: "data" }]);
    })
})