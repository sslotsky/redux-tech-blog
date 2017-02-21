import React, { PropTypes, Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeMirror from 'react-codemirror'

if (typeof(navigator) !== 'undefined') {
  require('codemirror/mode/jsx/jsx')
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/ruby/ruby')
  require('codemirror/mode/markdown/markdown')
}

export class Snippet extends Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    text: PropTypes.string,
    options: PropTypes.object
  }

  static defaultProps = {
    text: '',
    theme: 'erlang-dark'
  }

  options() {
    const { theme, options, language } = this.props

    return {
      theme,
      ...options,
      mode: this.props.language
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

