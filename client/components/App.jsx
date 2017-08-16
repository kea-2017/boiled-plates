import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
// import Greetings from './Greetings'
import Header from './Header'
import SearchBar from './SearchBar'
import Login from './Login'
import Dropdown from './Dropdown'
import MapBar from './MapBar'

const App = () => (
  <Router>
    <div className='app-container'>
      <Route path="/" component={Header}/> {/* <Route  exactpath="/" component={Greetings} /> */}
      <Route exact path="/" component={SearchBar}/>
      <Route exact path="/" component={Login}/>
      <Route  exact path="/" component={MapBar} />
      <Route exact path="/main" component={Dropdown}/>
    </div>
  </Router>
)

export default connect()(App)
