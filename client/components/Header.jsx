import React from 'react'
import {ButtonToolbar,DropdownButton,MenuItem,Button,
  Pager,Grid,Row,Col,Input} from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Grid>
        <Row className="header">
          <Col xs={1} md={4}></Col>
          <Col xs={4} md={4}>
            <h1>Hello Dave<small>wanna buy some pegs</small>
            </h1>
          </Col>
          <Col xs={1} md={4}></Col>
        </Row>
      </Grid>
    </div>
  )
}
export default Header
