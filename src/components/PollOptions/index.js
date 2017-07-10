import React from 'react'
import PropTypes from 'prop-types'

import s from './PollOptions.css'

class PollOptions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      optionValue: ''
    }
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleOptionChange (e) {
    e.preventDefault()
    console.log(e.target.value)
  }

  handleButtonClick (e) {
    e.preventDefault()
  }

  render () {
    const { options } = this.props
    return (
      <div>
        <form>
          {options.map(option => (
            <div key={option.id} style={s.radioButtonContainer}>
              <input onChange={this.handleOptionChange} type='radio' name='poll' value={option.name} />
              <span>{option.name}</span>
            </div>
          ))}
          <div>
            <button type='submit'>Vote</button>
            <button onClick={this.handleButtonClick}>New Poll Option</button>
          </div>
        </form>
      </div>
    )
  }
}

PollOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    score: PropTypes.number
  }))
}

export default PollOptions
