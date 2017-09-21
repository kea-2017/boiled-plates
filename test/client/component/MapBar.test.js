import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import '../setup-dom'
import MapBar from '../../../client/components/MapBar'
import {MemoryRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../../../client/store'

test('MapBar showing', t => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <MapBar />
      </Router>
    </Provider>
  )
  t.is(wrapper.find('div').length, 2)
  t.is(wrapper.find('input').exists(), true)
})
