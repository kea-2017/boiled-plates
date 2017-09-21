import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import '../setup-dom'
import Dropdown from '../../../client/components/Dropdown'
import {MemoryRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../../../client/store'

test('Dropdown showing', t => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <Dropdown />
      </Router>
    </Provider>
  )
  // console.log(wrapper.html())
  // t.is(wrapper.find('renderDropdownButton()').length, 1)
  t.is(wrapper.find('ButtonToolbar').exists(), true)
})
