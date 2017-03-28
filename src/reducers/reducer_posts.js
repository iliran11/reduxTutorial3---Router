import { FETCH_POSTS } from '../actions/index.js';
import { FETCH_POST } from '../actions/index.js';
import { DELETE_POST } from '../actions/index.js';

const INTIAL_STATE = {
    all: [],
    post: null

}
export default function (state = INTIAL_STATE, action) {

    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                all: action.payload.data
            }
            break;
        case FETCH_POST:
            return {
                ...state,
                post: action.payload.data
            }
            break;
        case DELETE_POST:
            return {

            }
        default:
            return state;
    }
}