import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme'
import App from './App';



test('render without error', () => {
  const wrapper = shallow(<App />)
  const componentApp = wrapper.find("[data-test='component-app']")
  expect(componentApp.length).toBe(1)
})


test('render the title', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('h1').text()).toContain("Movie Search App")
})