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
    this.setState({
      optionValue: e.target.value
    })
    console.log(e.target.value)
  }

  handleButtonClick (e) {
    e.preventDefault()
  }

  ifOptionsAvailable () {
    return this.props.options && this.props.options.length > 0
  }

  render () {
    const { options } = this.props
    const optionsAvailable = this.ifOptionsAvailable()
    return (
      <div>
        <form>
          {!optionsAvailable &&
            <div>
              There are no options for this poll yet. Please add one.
            </div>
          }
          {optionsAvailable &&
            options.map(option => (
              <div key={option.id} style={s.radioButtonContainer}>
                <input
                  type='radio'
                  name='poll'
                  onChange={this.handleOptionChange}
                  value={option.name}
                  checked={this.state.optionValue === option.name}
                />
                <span>{option.name}</span>
              </div>
            ))}
          <div>
            {optionsAvailable && <button type='submit'>Vote</button>}
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
