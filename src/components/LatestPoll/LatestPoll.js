import React from 'react'
import Comments from '../Comments/Comments'

const poll = {
  title: 'Who is your favourite captain?',
  creatorId: 1,
  options: [{ id: 1, name: 'Piccard', score: 4 }, { id: 2, name: 'Kirk', score: 3 }],
  usersThatHaveVoted: [1, 4, 7],
  comments: [{
    id: 1,
    creatorId: 1,
    comment: 'This is a comment about the current poll'
  }]
}

const user = {
  id: 1,
  name: 'Matthew'
}

const LatestPoll = () => (
  <section>
    <div>
      <h2>{poll.title}</h2>
      <h4>by {user.name}</h4>
    </div>
    <div>
      <form>
        {poll.options.map(option => (
          <div key={option.id}>
            <input type='radio' name='poll' value={option.name} />
            <span>{option.name}</span>
          </div>
        ))}
      </form>
    </div>
    <Comments comments={poll.comments} />
  </section>
)

export default LatestPoll
