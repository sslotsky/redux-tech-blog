import React from 'react'
import { connect } from 'react-redux'

import loadPost from '../containers/PostLoader'
import { update } from 'MODULES/posts/actions'
import Form from './Form'

export function Edit({ post, handleSubmit }) {
  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={post.toJS()}
    />
  )
}

export default connect(
  state => ({ post: state.post.get('post') }),
  (dispatch, ownProps) => ({
    handleSubmit: data => dispatch(update(ownProps.params.id, data))
  })
)(loadPost(Edit))
