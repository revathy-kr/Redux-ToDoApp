import { combineReducers } from "redux";
import visibilityFilter from './VisibilityFilter';
import todos from './todo';

const rootReducers = combineReducers({ todos, visibilityFilter})

export default rootReducers;