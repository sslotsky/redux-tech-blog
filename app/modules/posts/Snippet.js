import React, { PropTypes, Component } from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/ruby/ruby'

export class SnippetPreview extends Component {
  static propTypes = {
    language: PropTypes.object.isRequired,
    text: PropTypes.object.isRequired
  }

  options() {
    return {
      readOnly: true,
      mode: this.props.language.value,
      theme: 'erlang-dark'
    }
  }

  render() {
    return (
      <CodeMirror options={this.options()} value={this.props.text.value} />
    )
  }
}

export class Snippet extends Component {
  static propTypes = {
    language: PropTypes.object,
    text: PropTypes.object
  }

  changeLanguage(e) {
    this.props.language.onChange(e.target.value)
  }

  handleChange(text) {
    this.props.text.onChange(text)
  }

  shouldComponentUpdate(nextProps) {
    return this.props.text.value != nextProps.text.value || this.props.language.value != nextProps.language.value
  }

  render() {
    return (
      <div>
        <select value={this.props.language.value} onChange={::this.changeLanguage}>
          <option value='jsx'>JSX</option>
          <option value='javascript'>JavaScript</option>
          <option value='ruby'>Ruby</option>
        </select>
        <CodeMirror options={{ mode: this.props.language.value, theme: 'erlang-dark' }} value={this.props.text.value} onChange={::this.handleChange} />
      </div>
    )
  }
}


