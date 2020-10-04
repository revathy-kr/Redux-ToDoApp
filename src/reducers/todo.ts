import { TodoActionTypes } from "../const/actionTypes";

const todos = (state = [], action) => {
  debugger
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];

    case TodoActionTypes.GET_TODO:
      return action.payload;

    case TodoActionTypes.TOGGLE_TODO:
      console.log(state, action);
      console.log(state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
      
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )

    case TodoActionTypes.UPDATE_TODO:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, ...action.payload }
          : item);
    default:
      return state;
  };
};

export default todos;