import React from 'react'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import { ButtonToolbar, DropdownButton, MenuItem, Button, Pager } from 'react-bootstrap';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }
  render() {
    const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger']
    return (
      <div>
        <Link to='/'>
         <button type="button" className="btn btn-primary">Home</button>
       </Link>
       <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}
       </ButtonToolbar>
       <Pager>
         <Pager.Item previous href="/">&larr; Previous Page</Pager.Item>
         <Pager.Item next href="#/map">Next Page &rarr;</Pager.Item>
       </Pager>
      </div>
    )
  }
}

function renderDropdownButton(title, i) {
  return (
    <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>Active Item</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  )
}
