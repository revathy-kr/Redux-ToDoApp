import { TodoActionTypes } from "../const/actionTypes";

let nextToDoId = 0;

export const addToDo = (text: string) => ({
  type: TodoActionTypes.ADD_TODO,
  id: nextToDoId++,
  text
});

export const setVisibilityFilter = (filter: string) => {
  console.log(filter);

  return ({
    type: TodoActionTypes.SET_VISIBILITY_FILTER,
    // id: nextToDoId++,
    filter
  })
};

export const toggleToDo = (id: number) => {
  console.log(id);

  return (
    {
      type: TodoActionTypes.TOGGLE_TODO,
      id
    })
};

export const visibilityFilters = (text: string) => ({
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
});