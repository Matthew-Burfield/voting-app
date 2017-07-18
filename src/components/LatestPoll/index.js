import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addUserHasVoted, increaseVote } from '../../redux/actionCreators'
import Poll from './elements/Poll'
import PollStats from './elements/PollStats'
import Comments from '../Comments/Comments'
import s from './styles.css'

const handleOnVoteCreator = (userId, increaseVote, addUserHasVoted) => {
  return function (optionId) {
    increaseVote(optionId)
    addUserHasVoted(userId)
  }
}

const LatestPoll = (props) => {
  const handleOnVote = handleOnVoteCreator(props.user.id, props.increaseVote, props.addUserHasVoted)
  const userHasVoted = props.poll.usersThatHaveVoted.includes(props.user.id)
  return (
    <section style={s.section}>
      <div>
        <h2>{props.poll.title}</h2>
        <h4>by {props.user.name}</h4>
      </div>
      {userHasVoted &&
        <PollStats options={props.poll.options} />
      }
      {!userHasVoted &&
        <Poll onVote={handleOnVote} options={props.poll.options} />
      }
      <Comments comments={props.poll.comments} users={[props.user, { id: '2', name: 'Kieran' }]} />
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
  increaseVote: PropTypes.func.isRequired,
  addUserHasVoted: PropTypes.func.isRequired
}

const mapActionsToProps = (dispatch) => ({
  addUserHasVoted (userId) {
    return dispatch(addUserHasVoted(userId))
  },
  increaseVote (optionId) {
    return dispatch(increaseVote(optionId))
  }
})

const mapStateToProps = (state) => ({
  poll: state.poll,
  user: state.user
})

export default connect(mapStateToProps, mapActionsToProps)(LatestPoll)
