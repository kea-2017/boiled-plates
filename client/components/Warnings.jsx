import React from 'react'
import {ButtonToolbar,DropdownButton,MenuItem,Button,
  Pager,Grid,Row,Col,Input} from 'react-bootstrap'
import {Link} from 'react-router-dom'

  const Warnings = () => {
    return (
      <div>
        <Grid>
          <Row className="header">
            <Col xs={1} md={4}></Col>
            <Col xs={4} md={4}>
              <h1>Warnings<small>Warnings</small>
              </h1>
            </Col>
            <Col xs={1} md={4}></Col>
          </Row>
          <Link to='/main'>
            <button type="button" className="btn btn-primary">Main</button>
          </Link>
        </Grid>
      </div>
    )
  }
  export default Warnings
