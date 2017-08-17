import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import {Provider} from 'react-redux'
import store from '../../../client/store'
import App from '../../../client/components/App'
import {MemoryRouter as Router} from 'react-router-dom'
import '../setup-dom'

App.prototype.componentDidMount = () => {}

test('App renders with a router', t => {
  const wrapper = mount(
    <Provider store={store}>
        <App Router={Router}/>
    </Provider>)

  t.is(wrapper.find('Router').exists(),true)
  t.is(wrapper.find('.app-container').exists(),true)
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
