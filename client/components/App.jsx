import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './Header'
import SearchBar from './SearchBar'
import Login from './Login'
import MapPage from './MapPage'
import Dropdown from './Dropdown'
import MapBar from './MapBar'
import Prescriptions from './Prescriptions'
import Referals from './Referals'
import Advice from './Advice'
import Warnings from './Warnings'


const App = () => (
  <Router>
    <div className='app-container'>
      <Route path="/" component={Header}/>
      <Route exact path="/" component={SearchBar}/>
      <Route exact path="/" component={Login}/>
      <Route exact path="/" component={MapBar} />
      <Route exact path="/main" component={Dropdown}/>
      <Route exact path="/map" component={MapPage}/>
      <Route exact path="/Prescriptions" component={Prescriptions}/>
      <Route exact path="/Referals" component={Referals}/>
      <Route exact path="/Advice" component={Advice}/>
      <Route exact path="/Warnings" component={Warnings}/>
    </div>
  </Router>
)

export default connect()(App)
