import React from 'react'
import Comments from './Comments'
import { mount } from 'enzyme'

const FIRST_COMMENT = 'This is a comment about the current poll'
const SECOND_COMMENT = 'This is a second comment'
const THIRD_COMMENT = 'This is a third comment by a new user'
const comment = [
  {
    id: 1,
    creatorId: 1,
    comment: FIRST_COMMENT
  }, {
    id: 2,
    creatorId: 1,
    comment: SECOND_COMMENT
  }, {
    id: 3,
    creatorId: 2,
    comment: THIRD_COMMENT
  }
]

describe('Component renders correctly with comments', () => {
  const wrapper = mount(<Comments comments={comment} />)
  const items = wrapper.find('.commentContainer')
  test('should render 3 comments', () => {
    expect(items.children().length).toBe(3)
  })

  test('should render first comment correctly', () => {
    expect(items.childAt(0).text()).toBe(FIRST_COMMENT)
  })

  test('should render second comment correctly', () => {
    expect(items.childAt(1).text()).toBe(SECOND_COMMENT)
  })

  test('should render third comment correctly', () => {
    expect(items.childAt(2).text()).toBe(THIRD_COMMENT)
  })
})

describe('Component renders correctly without comments', () => {
  const wrapper = mount(<Comments />)
  const items = wrapper.find('.commentContainer')
  test('should render 1 comments', () => {
    expect(items.children().length).toBe(1)
  })

  test('should render "There are no comments for this poll, yet."', () => {
    expect(items.childAt(0).text()).toBe('There are no comments for this poll, yet.')
  })
})

describe('User can create a comment for the poll', () => {
  // const wrapper = mount(<Comments />)
  // const commentInput = wrapper.find('form')
  // Expect form to have one input item, a text box

  // Expect that when a user creates a comment, the list of comments increases by 1.
  // Expect that when a user submits a comment, that comment is then rendered as the latest comment
})
