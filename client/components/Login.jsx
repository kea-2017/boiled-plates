import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">
            <Link to='/main'>Go!</Link>
          </span>
          <input type="text" className="form-control" placeholder="Proto login area" aria-describedby="basic-addon1"/>
        </div>
      </div>
    )
  }
}
