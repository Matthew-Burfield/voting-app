import {
  INCREASE_VOTE,
  ADD_USER_HAS_VOTED
} from './actions'

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
