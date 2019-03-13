const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const SHOW_ALL = 'SHOW_ALL'
const SHOW_COMPLETED = 'SHOW_COMPLETED'
const SHOW_ACTIVE = 'SHOW_ACTIVE'

let todoId = 0
export const addTodo = text => ({
  type: ADD_TODO,
  payload: { id: todoId++, text }
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter }
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
})

export const VisibilityFilters = {
  SHOW_ALL: SHOW_ALL,
  SHOW_COMPLETED: SHOW_COMPLETED,
  SHOW_ACTIVE: SHOW_ACTIVE
}
