import {Filter} from '../const/filterTypes';
import { TodoActionTypes } from '../const/actionTypes';

const visibilityFilter = (state = Filter.SHOW_ALL, action) => {
  switch (action.type) {
    case TodoActionTypes.SET_VISIBILITY_FILTER:
      return action.filter 
    default:
      return state
  }
}

export default visibilityFilter;