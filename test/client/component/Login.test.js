import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import '../setup-dom'
import Login from '../../../client/components/Login'

test('Login showing', t => {
  const wrapper = shallow(<Login />)
  t.is(wrapper.find('input').exists(), true)
})
