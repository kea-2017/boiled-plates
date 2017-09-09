import {combineReducers} from 'redux'

import greetings from './greetings'
import auth from './auth'

export default combineReducers({greetings, auth })
