import React, { PropTypes, Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/ruby/ruby'

export class Snippet extends Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    options: PropTypes.object
  }

  options() {
    return {
      ...this.props.options,
      mode: this.props.language,
      theme: 'erlang-dark'
    }
  }

  render() {
    return (
      <CodeMirror
        {...this.props}
        options={this.options()}
        value={this.props.text} />
    )
  }
}

export class Markdown extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    return (
      <ReactMarkdown source={this.props.text} />
    )
  }
}

