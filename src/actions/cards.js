let nextCardId = 0
export const submitLocationForm = (text) => ({
  type: 'ADD_CARD',
  id: nextCardId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleCard = (id) => ({
  type: 'TOGGLE_CARD',
  id
})
