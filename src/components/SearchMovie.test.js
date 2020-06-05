import React from 'react';
import { shallow } from 'enzyme'
import SearchMovie from './SearchMovie';




test('render without error', () => {
  const wrapper = shallow(<SearchMovie />)
  const componentSearchBox = wrapper.find("[data-test='component-search-box']")
  expect(componentSearchBox.length).toBe(1)
})

