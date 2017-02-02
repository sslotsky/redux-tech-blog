import React, { PropTypes, Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/ruby/ruby'
import 'codemirror/mode/markdown/markdown'

export class Snippet extends Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    text: PropTypes.string,
    options: PropTypes.object
  }

  static defaultProps = {
    text: ''
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
        value={this.props.text}
      />
    )
  }
}

export class Markdown extends Component {
  static propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    text: ''
  }

  render() {
    if (this.props.onChange)
      return (
        <Snippet {...this.props} language='markdown' />
      )

    return (
      <ReactMarkdown source={this.props.text} />
    )
  }
}

