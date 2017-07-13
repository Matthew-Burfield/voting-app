import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { increaseVote } from '../../redux/actionCreators'
import Poll from './elements/Poll'
import Comments from '../Comments/Comments'
import s from './LatestPoll.css'

const handleOnVoteCreator = (increaseVote, poll) => {
  return function (optionId) {
    increaseVote(poll, optionId)
  }
}

const LatestPoll = (props) => {
  const handleOnVote = handleOnVoteCreator(props.increaseVote, props.poll)
  return (
    <section style={s.section}>
      <div>
        <h2>{props.poll.title}</h2>
        <h4>by {props.user.name}</h4>
      </div>
      {/* if (poll.usersThatHaveVoted.includes(userId)) {
        return renderPollResults(poll.options)
      } */}
      <Poll onVote={handleOnVote} options={props.poll.options} />
      <Comments comments={props.poll.comments} />
    </section>
  )
}

LatestPoll.propTypes = {
  poll: PropTypes.shape({
    title: PropTypes.string,
    creatorId: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      score: PropTypes.number
    })),
    usersThatHaveVoted: PropTypes.arrayOf(PropTypes.string),
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      creatorId: PropTypes.string,
      comment: PropTypes.string
    }))
  }),
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }),
  increaseVote: PropTypes.func
}

const mapActionsToProps = (dispatch) => ({
  increaseVote (poll, optionId) {
    return dispatch(increaseVote(poll, optionId))
  }
})

const mapStateToProps = (state) => ({
  poll: state.poll,
  user: state.user
})

export default connect(mapStateToProps, mapActionsToProps)(LatestPoll)
