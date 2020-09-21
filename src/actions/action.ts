let nextToDoId = 0;

export const addToDo = (text) => ({
    type: 'ADD_TODO',
    id: nextToDoId++,
    text
});

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISBILITY_FILTER',
    id: nextToDoId++,
    filter
});

export const toggleToDo = (id) => ({
    type: 'TOGGGLE_TODO',
    id
});

export const visibilityFilters = (text) => ({
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
});