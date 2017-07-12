import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import PollOptions from '../PollOptions'
import Comments from '../Comments/Comments'
import s from './LatestPoll.css'

const renderPollResults = (options) => (
  <div>
    {options.map(option => (
      <div key={option.id} style={s.radioButtonContainer}>
        <p>{option.name} : {option.score}</p>
      </div>
    ))}
  </div>
)

const renderPoll = (userId, poll) => {
  if (poll.usersThatHaveVoted.includes(userId)) {
    return renderPollResults(poll.options)
  }
  return (
    <PollOptions
      options={poll.options}
      onVote={handleOnVote}
    />
  )
}

const handleOnVote = (vote) => {
  // const selectedVote = this.state.poll.options.find(option => {
  //   return option.name === vote
  // })
  // const newScore = selectedVote.score + 1
  // const newVote = Object.assign({}, selectedVote, { score: newScore })
}

const LatestPoll = ({ poll, user, dispatch }) => (
  <section style={s.section}>
    <div>
      <h2>{poll.title}</h2>
      <h4>by {user.name}</h4>
    </div>
    {renderPoll(user.id, poll)}
    <Comments comments={poll.comments} />
  </section>
)

LatestPoll.propTypes = {
  poll: PropTypes.shape({
    title: PropTypes.string,
    creatorId: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      score: PropTypes.number
    })),
    usersThatHaveVoted: PropTypes.arrayOf(PropTypes.number),
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      creatorId: PropTypes.number,
      comment: PropTypes.string
    }))
  }),
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }),
  dispatch: PropTypes.func
}

const mapActionsToProps = (dispatch) => ({
  increaseVote (poll, optionId) {
    return null
  }
})

const mapStateToProps = (state) => ({
  poll: state.poll,
  user: state.user
})

export default connect(mapStateToProps, mapActionsToProps)(LatestPoll)
