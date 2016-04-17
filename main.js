import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {AppContainer as App} from './App'

const store = createStore(reducer)

ReactDOM.render((
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
), document.getElementById("app"))
