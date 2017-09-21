function findGp (state = '', action) {
  switch (action.type) {
    case 'FIND_GP':
      return action.findGp
    default:
      return state
  }
}

export default findGp
