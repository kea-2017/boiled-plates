import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../actions/auth'
import ErrorMessage from './ErrorMessage'
import {ButtonToolbar, Button, Grid, Row, Col} from 'react-bootstrap'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick() {
    const {username, password} = this.state
    const creds = {
      username: username.trim(),
      password: password.trim()
    }
    this.props.loginUser(creds, () => {
      this.props.history.push('/MainPage')
    })
  }
}
