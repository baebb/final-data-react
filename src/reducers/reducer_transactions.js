//types
import { GET_TRANSACTION } from '../../src/actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case GET_TRANSACTION:
            return action.payload;
    }

    return state;
}