import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import SearchResult from '../../../client/components/SearchResult'

test('SearchResult showing', t => {
  const wrapper = shallow(<SearchResult />)
  t.is(wrapper.find('h1').text(), 'SearchResultSearchResult')
})
