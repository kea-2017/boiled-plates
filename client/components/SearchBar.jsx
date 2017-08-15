import React from 'react'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {term: ''}
    }
  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="input-group">
            <span className="input-group-btn">
              <Link to='/search'>
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
// import React, {Component} from 'react'
//
// export default class SearchBar extends Component {
// constructor(props) {
//   super(props)
//   this.state = {term: ''}
//   }
//
//   render() {
//     return (
//       <div className='search-bar'>
//       <input
//         value={this.state.term}
//         onChange={event => this.onInputChange(event.target.value)} />
//       </div>
//     );
//   }
//
//   onInputChange(term) {
//     this.setState({term})
//     this.props.onSearchTermChange(term)
//   }
// }
