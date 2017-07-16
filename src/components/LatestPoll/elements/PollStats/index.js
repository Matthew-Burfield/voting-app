import React from 'react'
import PropTypes from 'prop-types'

const PollStats = (props) => (
  <section>
    <h1>Poll Stats</h1>
    {props.options.map(option => (
      <div key={option.id}>
        <span>{option.name}: </span><span><b>{option.score}</b></span>
      </div>
    ))}
  </section>
)

PollStats.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number
  }))
}

export default PollStats
