import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import Header from '../../../client/components/Header'

test('Header showing', t => {
  const wrapper = shallow(<Header />)
  t.is(wrapper.find('h1').text(), 'Portal GPyour localhost Md')
})
