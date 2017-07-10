import React from 'react'
// import PropTypes from 'prop-types'

import PollOptions from '../PollOptions'
import Comments from '../Comments/Comments'
import s from './LatestPoll.css'

const poll = {
  title: 'Who is your favourite captain?',
  creatorId: 1,
  options: [{ id: 1, name: 'Piccard', score: 4 }, { id: 2, name: 'Kirk', score: 3 }],
  usersThatHaveVoted: [2, 4, 7],
  comments: [{
    id: 1,
    creatorId: 1,
    comment: 'This is a comment about the current poll'
  },
  {
    id: 2,
    creatorId: 1,
    comment: 'This is another comment about the current poll'
  }]
}

const user = {
  id: 1,
  name: 'Matthew'
}

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
  return <PollOptions options={poll.options} />
}

const LatestPoll = () => (
  <section style={s.section}>
    <div>
      <h2>{poll.title}</h2>
      <h4>by {user.name}</h4>
    </div>
    {renderPoll(user.id, poll)}
    <Comments comments={poll.comments} />
  </section>
)

export default LatestPoll
