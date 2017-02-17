import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, arrayPush, arraySwap } from 'redux-form'
import { validator } from 'validate-this'
import Editor from './components/Editor/Editor'
import Preview from './components/Preview/Preview'
import { search, create } from '../tags/actions'

class Form extends Component {
  state = {
    preview: false
  }

  togglePreview() {
    const { preview } = this.state
    this.setState({ preview: !preview })
  }

  render() {
    const { preview } = this.state
    const Toggled = preview ? Preview : Editor

    return (
      <form onSubmit={this.props.handleSubmit}>
        <Toggled toggle={() => this.togglePreview()} {...this.props} />
      </form>
    )
  }
}

function actions(dispatch) {
  return {
    addSnippet: language => () => dispatch(arrayPush('post', 'blocks', { format: 'snippet', language })),
    addMarkdown: () => dispatch(arrayPush('post', 'blocks', { format: 'markdown' })),
    addVideo: () => dispatch(arrayPush('post', 'blocks', { format: 'video' })),
    searchTags: () => dispatch(search()),
    createTag: () => dispatch(create()),
  }
}

const required = val => {
  if (!val) {
    return 'Required'
  }
}

export default reduxForm({
  form: 'post',
  validate: values => validator(values, v => {
    v.validate('title').satisfies(required)
    v.validateChildren('blocks', (bv, block) => {
      bv.validate('format').satisfies(required)

      if (block.format === 'video') {
        bv.validate('url').satisfies(required)
      }
    })
  })
})(connect(undefined, actions)(Form))
