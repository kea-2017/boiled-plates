import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'



// const API_KEY = 'AIzaSyA_K3q7k5VIl90mVcq8MY4jzgqVEh4Tt_Q'
// https://maps.googleapis.com/maps/api/place/textsearch/xml?query=hospitals+in+Wellington&key='AIzaSyA_K3q7k5VIl90mVcq8MY4jzgqVEh4Tt_Q'

// https://maps.googleapis.com/maps/api/directions/json?origin=YourLocation&destination+Hospitals+Wellington&key='AIzaSyA_K3q7k5VIl90mVcq8MY4jzgqVEh4Tt_Q'
export default class MapBar extends React.Component {
  render() {
    return (
      <div>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Closest A&E to your location" aria-describedby="basic-addon1"/>
          <span className="input-group-addon" id="basic-addon1"><Link to='/map'>Help !!</Link></span>
        </div>
      </div>
    )
  }
}
