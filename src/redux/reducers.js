import {
  INCREASE_VOTE
} from './actions'

const DEFAULT_STATE = {
  poll: {
    title: 'Who is your favourite captain?',
    creatorId: '1',
    options: [{ id: '1', name: 'Piccard', score: 10 }, { id: '2', name: 'Kirk', score: 3 }],
    usersThatHaveVoted: ['2', '4', '7'],
    comments: [{
      id: '1',
      creatorId: '1',
      comment: 'This is a comment about the current poll'
    },
    {
      id: '2',
      creatorId: '1',
      comment: 'This is another comment about the current poll'
    }]
  },
  user: {
    id: '1',
    name: 'Matthew'
  }
}

const increaseVote = (state, action) => {
  const newOptions = state.poll.options.map(option => {
    if (option.id === action.optionId) {
      option.score += 1
    }
    return option
  })
  const newPoll = Object.assign({}, action.poll, { options: newOptions })
  return Object.assign({}, state, newPoll)
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case INCREASE_VOTE:
      return increaseVote(state, action)
    default:
      return state
  }
}

export default rootReducer
