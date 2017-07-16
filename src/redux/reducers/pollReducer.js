import {
  INCREASE_VOTE,
  ADD_USER_HAS_VOTED
} from '../actions'

const DEFAULT_STATE = {
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
}

const increaseVote = (state, action) => {
  const cloneOptions = JSON.parse(JSON.stringify(state.options))
  const optionIndex = cloneOptions.findIndex(option => {
    return option.id === action.optionId
  })
  cloneOptions[optionIndex].score += 1
  return Object.assign({}, state, { options: cloneOptions })
}

const addUserHasVoted = (state, action) => {
  const newVotedUsersList = [...state.usersThatHaveVoted, action.userId]
  return Object.assign({}, state, { usersThatHaveVoted: newVotedUsersList })
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case INCREASE_VOTE:
      return increaseVote(state, action)
    case ADD_USER_HAS_VOTED:
      return addUserHasVoted(state, action)
    default:
      return state
  }
}
