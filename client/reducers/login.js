function logins (state = '', action) {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return action.logins
    default:
      return state
  }
}

export default logins
