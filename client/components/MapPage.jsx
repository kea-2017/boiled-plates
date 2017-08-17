import React from 'react'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import {ButtonToolbar,DropdownButton,MenuItem,Button,Pager,
  Grid,Row,Col,Input} from 'react-bootstrap'
import {Map, Marker} from 'google-maps-react'
import {withGoogleMap, GoogleMap} from "react-google-maps"

export default class MapPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }
  render() {
    return (
      <div>
        <h1>BIGLY MAP HERE !!</h1>
        <Grid>
          <Row className="home button">
            <Col xs={2} md={3}></Col>
            <Col xs={4} md={3}>
            <Map google={window.google} style={{
              width: '40vw',
              height: '40vw',
              position: 'relative',
              margin: '10px'
            }} className={'map'} zoom={6} initialCenter={{
              lat: -36.8547512,
              lng: 174.7787425
            }}></Map></Col>
              <Col xs={2} md={3}></Col>
          </Row>
        </Grid>
        <Row>
          <br></br>
        </Row>
        <Grid>
          <Row className="home button">
            <Link to='/'>
              <button type="button" className="btn btn-primary">Home</button>
            </Link>
            <Pager>
              <Pager.Item previous href="/">&larr; Previous Page</Pager.Item>
            </Pager>
          </Row>
        </Grid>
      </div>
    )
  }
}
