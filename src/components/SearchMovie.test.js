import React from 'react';
import { shallow } from 'enzyme'
import SearchMovie from './SearchMovie';






test('render without error', () => {
  const wrapper = shallow(<SearchMovie />)
  const componentSearchBox = wrapper.find("[data-test='component-search-box']")
  expect(componentSearchBox.length).toBe(1)
})

test('render input field', () => {
  const wrapper = shallow(<SearchMovie />)
  const inputValue = wrapper.find("[data-test='input-value']")
  expect(inputValue.length).toBe(1)
})


test('render text movie name', () => {
  const wrapper = shallow(<SearchMovie />)
  const textMovieName = wrapper.find("[data-test='movie-name-text']")
  expect(textMovieName.length).toBe(1)
})


test('render button to search movies', () => {
  const wrapper = shallow(<SearchMovie />)
  const searchButton = wrapper.find("[data-test='search-movies-button']")
  expect(searchButton.length).toBe(1)
})