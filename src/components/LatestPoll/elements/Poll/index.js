import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.css'

class Poll extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: null
    }
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleOptionChange (e) {
    this.setState({
      selectedOption: e.target.value
    })
    console.log(e.target.value)
  }

  handleButtonClick (e) {
    e.preventDefault()
  }

  handleFormSubmit (e) {
    e.preventDefault()
    this.props.onVote(this.state.selectedOption)
  }

  ifOptionsAvailable () {
    return this.props.options && this.props.options.length > 0
  }

  render () {
    const { options } = this.props
    const optionsAvailable = this.ifOptionsAvailable()
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
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
                  value={option.id}
                  checked={this.state.selectedOption === option.id}
                />
                <span>{option.name}</span>
                <span>{option.score}</span>
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

Poll.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number
  })),
  onVote: PropTypes.func.isRequired
}

Poll.defaultProps = {
  options: []
}

export default Poll
