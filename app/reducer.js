import { profile } from './modules/profile/reducers'
import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

export default combineReducers({
  profile: profile,
  routing: routeReducer
})
