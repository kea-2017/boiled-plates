import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import '../setup-dom'
import Prescriptions from '../../../client/components/Prescriptions'
import {MemoryRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../../../client/store'

test('Prescriptions showing', t => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <Prescriptions />
      </Router>
    </Provider>
  )
  t.is(wrapper.find('select').length, 3)
  t.is(wrapper.find('option').exists(), true)
})
