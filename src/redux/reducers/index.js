import { combineReducers } from 'redux'
import poll from './pollReducer'
import user from './userReducer'

export default combineReducers({
  poll,
  user
})
