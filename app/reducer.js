import { profile } from './modules/profile/reducers'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  profile,
  routing,
  form: formReducer
})
