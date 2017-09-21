function searches (state = '', action) {
  switch (action.type) {
    case 'MAKE_SEARCH':
      return action.term
    default:
      return state
  }
}

export default searches
