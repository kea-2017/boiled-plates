import React from 'react'
import {Link} from 'react-router-dom'
import {ButtonToolbar,DropdownButton,MenuItem,Button,
  Pager,Grid,Row,Col,Input} from 'react-bootstrap'

  const Referals = () => {
    return (
      <div>
        <Grid>
          <Row className="header">
            <Col xs={1} md={4}></Col>
            <Col xs={4} md={4}>
              <h1>Referals<small>Referals</small>
              </h1>
            </Col>
            <Col xs={1} md={4}></Col>
          </Row>
          <Row>
            <Col xs={1} md={4}></Col>
            <Col xs={4} md={4}>
              <Row><br></br></Row>
              <Row><br></br></Row>
              <Row><br></br></Row>
              <Row><br></br></Row>
            <p>"Raw I'm gonna give it to you, with no trivia Raw like cocaine straight from Bolivia My hip-hop will rock and shock the nation like the Emancipation Proclamation Weak MC's approach with slang that's dead you might as well run into the wall and bang your head I'm pushin' force, my force your doubtin' I'm makin' devils cower to the Caucus Mountains".</p>
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
  export default Referals
