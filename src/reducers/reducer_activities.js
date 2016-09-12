//types
import { TOP_FIVE_ACTIVITIES } from '../../src/actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case TOP_FIVE_ACTIVITIES:
            return action.payload;
    }
    return state;
}