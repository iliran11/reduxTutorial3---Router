import {combineReducers} from 'redux';
import ReducerPosts from './reducer_posts.js';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({posts: ReducerPosts, form: formReducer});

export default rootReducer;
