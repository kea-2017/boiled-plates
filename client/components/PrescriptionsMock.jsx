import React from 'react'
import {connect} from 'react-redux'

import {getPrescriptions} from '../actions/prescriptions'

const renderPrescriptions = (prescriptions, key) => (
  <h1 key={key}>{prescriptions.text}</h1>
)
const Prescriptions = ({prescriptions, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getPrescriptions())}>Show Prescriptions</button>
    {prescriptions.map(renderPrescriptions)}
  </div>
)
const mapStateToProps = (state) => {
  return {prescriptions: state.prescriptions}
}
export default connect(mapStateToProps)(PrescriptionsMock)
