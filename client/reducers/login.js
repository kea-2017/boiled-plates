function searches (state = [], action) {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return [...action.login]
    default:
      return state
  }
}

export default login
