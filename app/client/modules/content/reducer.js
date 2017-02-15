import { Map, List } from 'immutable'
import { resolveEach } from 'redux-resolver'
import * as actionTypes from './actionTypes'

const initialState = Map({
  assets: List(),
  page: 0,
  done: false,
  stale: false
})

function appendAssets(state, action) {
  return state.merge({
    assets: state.get('assets').concat(action.assets),
    page: state.get('page') + 1,
    done: action.assets.length === 0
  })
}

function expire() {
  return initialState.set('stale', true)
}

export default resolveEach(initialState, {
  [actionTypes.FETCHED]: appendAssets,
  [actionTypes.EXPIRE]: expire
})
