import {
  INCREASE_VOTE,
  ADD_USER_HAS_VOTED
} from './actions'

export const userVoted = (userId, optionId) => {
  increaseVote(optionId)
  addUserHasVoted(userId)
}

export const increaseVote = (optionId) => {
  return {
    type: INCREASE_VOTE,
    optionId
  }
}

export const addUserHasVoted = (userId) => {
  return {
    type: ADD_USER_HAS_VOTED,
    userId
  }
}
