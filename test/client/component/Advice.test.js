import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'

import Advice from '../../../client/components/Advice'

test('Advice showing', t => {
  const wrapper = shallow(<Advice />)
  t.is(wrapper.find('h1').text(), 'AdviceAdvice')
})
