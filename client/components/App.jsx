import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'
import Header from './Header'
import SearchBar from './SearchBar'
import Login from './Login'

const App = () => (
  <Router>
    <div className='app-container'>
      <Route  exactpath="/" component={Header} />
      {/* <Route  exactpath="/" component={Greetings} /> */}
      <Route  exactpath="/" component={SearchBar} />
      <Route  exactpath="/" component={Login} />
    </div>
  </Router>
)

export default App
