import {
  INCREASE_VOTE,
  ADD_USER_HAS_VOTED,
  SAVE_COMMENT
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

export const saveComment = (userId, commentValue) => {
  return {
    type: SAVE_COMMENT,
    payload: {
      userId,
      commentValue
    }
  }
}
