import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, arrayPush, arraySwap } from 'redux-form'
import Editor from './components/Editor/Editor'
import Preview from './components/Preview/Preview'

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

const actions = {
  addSnippet: () => arrayPush('post', 'blocks', { format: 'snippet', language: 'jsx' }),
  addMarkdown: () => arrayPush('post', 'blocks', { format: 'markdown' }),
  addVideo: () => arrayPush('post', 'blocks', { format: 'video' })
} 

export default reduxForm({
  form: 'post'
})(connect(undefined, actions)(Form))
