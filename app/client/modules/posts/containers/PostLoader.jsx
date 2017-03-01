import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, clear } from 'MODULES/posts/actions'
import { loading } from 'SHARED/decorators'

export class PostLoader extends Component {
  componentDidMount() {
    const { load, post, id } = this.props
    const postId = post.get('id')

    if (!postId || postId !== id) {
      this.props.load()
    }
  }

  componentWillUnmount() {
    this.props.clearPost()
  }

  render() {
    return this.props.children
  }
}

const Connected = connect(
  state => ({ post: state.post.get('post') }),
  (dispatch, ownProps) => ({
    id: parseInt(ownProps.params.id, 10),
    load: () => dispatch(fetchPost(ownProps.params.id)),
    clearPost: () => dispatch(clear())
  })
)(loading(PostLoader))

export default function loadPost(Component) {
  return props => (
    <Connected {...props}>
      <Component {...props} />
    </Connected>
  )
}
