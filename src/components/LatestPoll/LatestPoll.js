import React from 'react'
import s from './LatestPoll.css'
import Comments from '../Comments/Comments'

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

const handleButtonClick = (e) => {
  e.preventDefault()
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(e)
}

const renderPollOptions = (options) => (
  <div>
    <form onSubmit={handleSubmit}>
      {options.map(option => (
        <div key={option.id} style={s.radioButtonContainer}>
          <input type='radio' name='poll' value={option.name} />
          <span>{option.name}</span>
        </div>
      ))}
      <div>
        <button type='submit'>Vote</button>
        <button onClick={handleButtonClick}>New Poll Option</button>
      </div>
    </form>
  </div>
)

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
  return renderPollOptions(poll.options)
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
