import { profile } from './modules/profile/reducers'
import session from './modules/session/reducer'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  profile,
  routing,
  session,
  form: formReducer
})
