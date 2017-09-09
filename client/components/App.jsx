import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'
import Navbar from './Navbar'

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <h1>Hello World</h1>
      <Navbar />
        <Route exact path="/" component={Greetings}/>
      </div>
    </Router>
  )
}

export default App
