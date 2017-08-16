import {combineReducers} from 'redux'

import greetings from './greetings'
import dropdown from './dropdown'
import login from './login'
import searchbar from './searchbar'
import mapBar from './mapBar'

export default combineReducers({
  greetings,
  dropdown,
  login,
  searchbar,
  mapBar
})
