import request from 'superagent'
export const seePrescription = (prescriptions) => {
  return {type: 'SEE_PRESCRIPTIONS', prescriptions}
}
export function getPrescriptions() {
  return (dispatch) => {
    request.get(`/api/prescriptions`).end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(seePrescription(res.body))
    })
  }
}
