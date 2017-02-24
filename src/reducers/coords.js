export const browserCoords = (state = null, action) => {
  switch (action.type) {
  case 'SET_BROWSER_COORDS':
    return action.coords
  default:
    return state
  }
}
