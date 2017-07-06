import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import TopNav from './TopNav'
import { mount } from 'enzyme'

describe('Component renders correctly', () => {
  const wrapper = mount(<Router><TopNav /></Router>)
  const items = wrapper.find('.navItems')
  test('should render 2 menu items', () => {
    expect(items.children().length).toBe(2)
  })

  test('should render home first', () => {
    expect(items.children().first().text()).toBe('Home')
  })
})
