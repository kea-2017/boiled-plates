import React from 'react'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import {
  ButtonToolbar,  DropdownButton,  MenuItem,Button,Pager,
  Grid,Row,Col,Input} from 'react-bootstrap'

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }
  render() {
    return (
      <div>
        <Grid>
          <Row className="header">
            <Col xs={2} md={2}></Col>
            <Col xs={10} md={10}>
            </Col>
            <Col xs={2} md={2}></Col>
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
                <Link to='/Prescriptions'>
                  <Button bsStyle="primary" bsSize="large">Prescriptions</Button>
                </Link>
              </Col>
              <Col xs={2} md={3}></Col>
              <Col xs={2} md={3}></Col>
              <Col xs={4} md={3}>
                <Link to='/Referals'>
                  <Button bsStyle="primary" bsSize="large">Referals</Button>
                </Link>
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
                <Link to='/Advice'>
                  <Button bsStyle="primary" bsSize="large"> Advice </Button>
                </Link>
              </Col>
              <Col xs={2} md={3}></Col>
              <Col xs={2} md={3}></Col>
              <Col xs={4} md={3}>
                <Link to='/Warnings'>
                  <Button bsStyle="primary" bsSize="large">Warnings</Button>
                </Link>
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
