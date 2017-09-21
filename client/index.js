import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import {HashRouter as Router} from 'react-router-dom'
import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App Router={Router}/>
    </Provider>,
    document.getElementById('app')
  )
})
