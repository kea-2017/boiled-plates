import React from 'react'
import {Link} from 'react-router-dom'
import {getPrescriptions} from '../actions/prescriptions'
// import knex from 'knex'
import {connect} from 'react-redux'
import {ButtonToolbar,DropdownButton,MenuItem,Button,
  Pager,Grid,Row,Col,Input,Form} from 'react-bootstrap'

export default class Prescriptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      getPrescriptions: []
    }
  }
  render() {
    return (
      <div>
        <Grid>
          <Row className="header">
            <Col xs={1} md={4}></Col>
            <Col xs={4} md={4}>
              <h1>Prescriptions<small>Prescriptions</small>
              </h1>
            </Col>
            <Col xs={1} md={4}></Col>
          </Row>
          <Form>
            <select>
              <option defaultValue>GP</option>
              <option value='Dave'>Dave</option>
              <option value='Dave'>Papa Lazaru</option>
            </select>
            <select>
              <option defaultValue>Drugs</option>
              <option value='Drugs'>Ocytocin</option>
              <option value='Drugs'>Dopamine</option>
            </select>
            <select>
              <option defaultValue>Condition</option>
              <option value='BBB'>Edward</option>
              <option value='BBB'>Tubbs</option>
            </select>
          </Form>
          <Link to='/'>
            <Button type="button" className="btn btn-primary">Home</Button>
          </Link>
        </Grid>
      </div>
    )
  }
}
