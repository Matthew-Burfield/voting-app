import {
  INCREASE_VOTE
} from './actions'

export const increaseVote = (poll, optionId) => {
  return {
    type: INCREASE_VOTE,
    poll,
    optionId
  }
}
