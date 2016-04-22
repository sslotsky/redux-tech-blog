import { Map } from 'immutable'

const defaultState = Map({
  name: 'universe'
})

export function profile(state=defaultState, action) {
  switch (action.type) {
    case 'NAME_UPDATED':
      return state.merge({
        name: action.name
      })
    default: return state
  }
}


