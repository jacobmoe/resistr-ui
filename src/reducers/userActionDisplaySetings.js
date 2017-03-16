const defaultSettings = {
  restrictToCurrentUser: false,
  timePeriod: 'month'
}

const userActionDisplaySettings = (state = defaultSettings, action) => {
  switch (action.type) {
  case 'UPDATE_USER_ACTION_DISPLAY_SETTING':
    return Object.assign({}, state, action.setting)
  default:
    return state
  }
}

export default userActionDisplaySettings
