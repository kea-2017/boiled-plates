function searches (state = '', action) {
  switch (action.type) {
    case 'MAKE_SEARCH':
    console.log(action)
      return action.term
    default:
      return state
  }
}

export default searches
