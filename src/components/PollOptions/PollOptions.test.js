import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import PollOptions from './index.js'

const options = [
  {
    id: 1,
    option: 'Snowboarding',
    score: 0
  },
  {
    id: 2,
    option: 'Skiing',
    score: 0
  },
  {
    id: 3,
    option: 'Snow shoes',
    score: 0
  },
  {
    id: 4,
    option: 'Teboggin',
    score: 0
  }
]

it('renders without crashing with no options', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PollOptions />, div)
})

it('renders without crashing with options', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PollOptions options={options} />, div)
})

it(`doesn't render a vote button if there are no options`, () => {
  const wrapper = mount(<PollOptions />)
  const items = wrapper.find('')
  test('should render 3 comments', () => {
    expect(items.children().length).toBe(3)
  })
})
