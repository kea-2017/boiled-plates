function dropDown (state = '', action) {
  switch (action.type) {
    case 'MAKE_SEARCH':
    console.log(action)
      return action.choice
    default:
      return state
  }
}

export default dropDown
