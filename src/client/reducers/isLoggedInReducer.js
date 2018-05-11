export default (state = !!localStorage.token, action) => {
  switch (action.type) {
    case 'CHANGE_LOGIN_STATUS':
      return action.payload
  }
  return state
}
