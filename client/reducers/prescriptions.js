function prescriptions (state = [], action) {
  switch (action.type) {
    case 'SEE_PRESCRIPTIONS':
      return [...action.prescriptions]
    default:
      return state
  }
}

export default prescriptions
