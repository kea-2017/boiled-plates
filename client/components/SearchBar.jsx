import React from 'react'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="input-group">
            <span className="input-group-btn">
              <Link to='/main'>
                <button className="btn btn-default" type="button">Go!</button>
              </Link>
            </span>
            <input type="text" className="form-control" placeholder="Search for..."/>
          </div>
        </div>
      </div>
    )
  }
}
