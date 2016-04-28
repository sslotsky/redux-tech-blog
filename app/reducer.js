import { profile } from './modules/profile/reducers'
import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  profile,
  routing: routeReducer,
  form: formReducer
})
