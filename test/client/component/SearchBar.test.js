import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import SearchBar from '../../../client/components/SearchBar'

test('SearchBar showing', t => {
  const wrapper = shallow(<SearchBar />)
  t.is(wrapper.find('button').text(), 'Go!')
})
