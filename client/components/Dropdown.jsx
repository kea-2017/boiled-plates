import React from 'react'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import {
  ButtonToolbar,
  DropdownButton,
  MenuItem,
  Button,
  Pager,
  Grid,
  Row,
  Col,
  Input
} from 'react-bootstrap'

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }
  render() {
    const BUTTONS = [
      'Default',
      'Primary',
      'Success',
      'Info',
      'Warning',
      'Danger'
    ]
    return (
      <div>
        <Grid>
          <Row className="header">
            <Col xs={2} md={2}></Col>
          <Col xs={10} md={10}>
        <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}
        </ButtonToolbar></Col>
        <Col xs={2} md={2}></Col>
        <Link to='/'>
        <button type="button" className="btn btn-primary">Home</button>
      </Link>
      </Row>
    </Grid>
        <Row>
          <br></br>
          <br></br>
          <br></br>
        </Row>
        <ButtonToolbar>
          <Grid>
            <Row className="show-grid">
              <Col xs={2} md={3}></Col>
              <Col xs={4} md={3}>
                <Button bsStyle="primary" bsSize="large">Prescriptions</Button>
              </Col>
              <Col xs={2} md={3}></Col>
              <Col xs={2} md={3}></Col>
              <Col xs={4} md={3}>
                <Button bsStyle="primary" bsSize="large">Referals</Button>
              </Col>
              <Col xs={2} md={3}></Col>
            </Row>
          </Grid>
          <Row>
            <br></br>
          </Row>
          <Grid>
            <Row className="show-grid">
              <Col xs={2} md={3}></Col>
              <Col xs={4} md={3}>
                <Button bsStyle="primary" bsSize="large">Advice</Button>
              </Col>
              <Col xs={2} md={3}></Col>
              <Col xs={2} md={3}></Col>
              <Col xs={4} md={3}>
                <Button bsStyle="primary" bsSize="large">Warnings</Button>
              </Col>
              <Col xs={2} md={3}></Col>
            </Row>
          </Grid>
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
      <MenuItem divider/>
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  )
}
