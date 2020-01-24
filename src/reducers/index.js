import { combineReducers } from 'redux';
import postReducer from './postReducers';
import pageReducer from './pageReducers';


export default combineReducers({
    posts: postReducer,
    page: pageReducer
});