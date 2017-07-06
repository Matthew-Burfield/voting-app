import React from 'react'
import ReactDOM from 'react-dom'
import Polls from './Polls'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Polls />, div)
})
