import {FETCH_POSTS} from '../actions/index.js';

const INTIAL_STATE = {
    all: [],
    post: null
}
export default function(state = INTIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                all: action.payload.data
            }
            break;
        default:
            return state;
    }
}
