//types
import { GET_MERCHANT } from '../../src/actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case GET_MERCHANT:
            return action.payload;
    }

    return state;
}