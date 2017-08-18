import React from 'react'
import {Link} from 'react-router-dom'
import {ButtonToolbar,DropdownButton,MenuItem,Button,
  Pager,Grid,Row,Col,Input} from 'react-bootstrap'

  const SearchResult = () => {
    return (
      <div>
        <Grid>
          <Row className="search result">
            <Col xs={1} md={4}></Col>
            <Col xs={4} md={4}>
              <h1>SearchResult<small>SearchResult</small>
              </h1>
            </Col>
            <Col xs={1} md={4}></Col>
          </Row>
          <Link to='/'>
            <button type="button" className="btn btn-primary">Home</button>
          </Link>
        </Grid>
      </div>
    )
  }
  export default SearchResult
