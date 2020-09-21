import { TodoActionTypes } from "../const/actionTypes";

const todos = (state = [], action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          Completed: false
        }
      ];

    case TodoActionTypes.GET_TODO:
      return action.payload;

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