import React from 'react'
import DevTools from 'CLIENT/DevTools'
import { match, RouterContext, createMemoryHistory } from 'react-router'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'

import routes from 'CLIENT/config/routes'
import reducer from 'CLIENT/reducer'
import template from './template'
import Browse from 'MODULES/posts/components/Browse'
import Read from 'MODULES/posts/components/Read'
import * as posts from 'SERVICES/posts'
import { composables } from 'violet-paginator'
import { authenticated } from 'MODULES/session/actions'
import { fetched } from 'MODULES/posts/actions'

const preload = (store, query, params) => ({
  [Browse]: () => {
    return posts.list().then(payload => {
      const pageActions = composables({ listId: 'posts', preloaded: payload })
      return store.dispatch(pageActions.initialize())
    })
  },
  [Read]: () => {
    return posts.show(params.id).then(post => store.dispatch(fetched(post)))
  }
})

export default function(req, res) {
  const memoryHistory = createMemoryHistory(req.path)
  const router = routerMiddleware(memoryHistory)

  const store = createStore(
    reducer,
    compose(applyMiddleware(router, thunk), DevTools.instrument())
  )

  const history = syncHistoryWithStore(memoryHistory, store)

  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const { components, routes, query, params } = renderProps
      const component = components[components.length - 1]
      const route = routes[routes.length - 1]

      if (req.currentUser) {
        store.dispatch(authenticated(req.currentUser))
      } else if (route.auth) {
        res.redirect('/login')
      }

      const handler = preload(store, query, params)[component]
      const promise = handler ? handler() : Promise.resolve()

      promise.then(() => {
        const html = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps}/>
          </Provider>
        )

        const preloadedState = store.getState()
        res.send(template(html, preloadedState))
      })
    }
  })
}
