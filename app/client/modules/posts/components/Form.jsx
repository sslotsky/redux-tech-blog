import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, arrayPush, arraySwap } from 'redux-form'
import { validator } from 'validate-this'
import Editor from './Editor/Editor'
import Preview from './Preview/Preview'
import { search, create } from 'MODULES/tags/actions'

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
    addBlock: format => () => dispatch(arrayPush('post', 'blocks', { format })),
    ...bindActionCreators({
      searchTags: search,
      createTag: create
    }, dispatch)
  }
}

const required = val => {
  if (!val) {
    return 'Required'
  }
}

export default reduxForm({
  form: 'post',
  enableReinitialize: true,
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
