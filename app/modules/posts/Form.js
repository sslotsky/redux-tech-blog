import React, { PropTypes, Component } from 'react'
import { reduxForm, addArrayValue } from 'redux-form'
import { Snippet } from './Snippet'

class Form extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired
  }

  blocks() {
    return this.props.fields.blocks.map((b, i) => {
      return (
        <div key={`blocks-${i}`}>
          <Snippet {...b} />
          <hr />
        </div>
      )
    })
  }

  render() {
    return (
      <form className='pure-form pure-form-stacked' onSubmit={this.props.handleSubmit}>
        {this.blocks()}
        <div className='button-list'>
          <button type='submit' className='pure-button button-success'>
            Submit
          </button>
        </div>
        <div className='button-list'>
          <a className='pure-button button-secondary' onClick={this.props.addSnippet}>Add Snippet</a>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'post',
  fields: [
    'blocks[].format',
    'blocks[].text',
    'blocks[].language'
  ]
}, undefined, {
  addSnippet: () => addArrayValue('post', 'blocks', { format: 'snippet', language: 'jsx' })
})(Form)
