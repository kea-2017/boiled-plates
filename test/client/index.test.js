import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'
import './setup-dom'

App.prototype.componentDidMount = () => {}

test('App renders', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('Header').length,1)
})

// test('BeerListItem receives 1 item', t => {
//   const wrapper = shallow(<BeerListItem beer={'North End Pilsner'}/>)
//   t.is(wrapper.find('li').length,1)
// })
//
// test('BeerList has beers', t => {
//   const wrapper = shallow(<BeerList />)
//   t.is(wrapper.find('BeerListItem').length, beerData.beers.length)
//   // beerData.beers.forEach((beerItem, idx) => {
//   //   t.is(wrapper.find('.beer').nodes[idx].props.children[0], beerData.beers[idx].name)
//   // })
// })
