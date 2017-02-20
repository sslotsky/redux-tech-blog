import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loading } from 'SHARED/decorators'
import { fetchPost, update, clear } from 'MODULES/posts/actions'
import Form from './Form'

export class Edit extends Component {
  componentDidMount() {
    this.props.load()
  }

  componentWillUnmount() {
    this.props.clearPost()
  }

  render() {
    const { post, handleSubmit } = this.props

    return (
      <Form
        onSubmit={handleSubmit}
        initialValues={post.toJS()}
      />
    )
  }
}

export default connect(
  state => ({ post: state.post.get('post') }),
  (dispatch, ownProps) => ({
    load: () => dispatch(fetchPost(ownProps.params.id)),
    handleSubmit: data => dispatch(update(ownProps.params.id, data)),
    clearPost: () => dispatch(clear())
  })
)(loading(Edit))
