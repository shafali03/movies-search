import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme'
import App from './App';


test('render the title', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('h1').text()).toContain("Movie Search App")
})