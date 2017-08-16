function dropDown (state = '', action) {
  switch (action.type) {
    case 'MAKE_SEARCH':
      return action.choice
    default:
      return state
  }
}

export default dropDown
