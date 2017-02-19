import Immutable from 'immutable'

export default function() {
  if (window.__PRELOADED_STATE__) {
    const { session, content, post, posts, ...rest } = window.__PRELOADED_STATE__

    return {
      session: Immutable.fromJS(session),
      content: Immutable.fromJS(content),
      post: Immutable.fromJS(post),
      posts: Immutable.fromJS(posts),
      ...rest
    }
  }
}
