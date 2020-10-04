import Filter from '../const/filterTypes';
import { TodoActionTypes } from '../const/actionTypes';

const visibilityFilter = (state = Filter.SHOW_ALL, action) => {
  console.log(action,"123");
  console.log(TodoActionTypes.SET_VISIBILITY_FILTER, "===", action.type);
  
  switch (action.type) {    
    case TodoActionTypes.SET_VISIBILITY_FILTER:
      console.log(action);
      return action.filter 
    default:
      return state
  }
}

export default visibilityFilter;