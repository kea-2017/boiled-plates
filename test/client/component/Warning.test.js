import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import Warnings from '../../../client/components/Warnings'

test('Warnings showing', t => {
  const wrapper = shallow(<Warnings />)
  t.is(wrapper.find('h1').text(), 'WarningsWarnings')
})
