export function addErrors (key, errors) {
  return {
    type: 'ADD_ERRORS',
    key: key,
    errors: errors
  }
}

export function clearErrors (key) {
  return {
    type: 'CLEAR_ERRORS',
    key: key
  }
}
