import React from 'react'
import { shallow } from 'enzyme'
import MovieCard from './MovieCard'




test('render without error movie card', () => {
  const wrapper = shallow(<MovieCard />)
  const movieCardComponent = wrapper.find("[data-test='component-moviesCard']")
  expect(movieCardComponent.length).not.toBe(2)
})

