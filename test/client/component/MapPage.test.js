import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import jsdom from 'jsdom'
import '../setup-dom'

import MapPage from '../../../client/components/MapPage'
test('MapPage showing', t => {
  const wrapper = shallow(
  <MapPage />)
  t.is(wrapper.find('button').text(), 'Home')
})
