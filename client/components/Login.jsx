import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">@</span>
          <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
        </div>
      </div>
    )
  }
}
