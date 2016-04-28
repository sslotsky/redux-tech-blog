import React, { PropTypes, Component } from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/ruby/ruby'

export class Snippet extends Component {
  static propTypes = {
    language: PropTypes.object,
    text: PropTypes.object
  }

  handleChange(text) {
    this.props.text.onChange(text)
  }

  changeLanguage(e) {
    this.props.language.onChange(e.target.value)
  }

  render() {
    return (
      <div>
        <select id={this.props.language.name} value={this.props.language.value} onChange={::this.changeLanguage}>
          <option value='jsx'>JSX</option>
          <option value='javascript'>JavaScript</option>
          <option value='ruby'>Ruby</option>
        </select>
        <CodeMirror options={{ mode: this.props.language.value, theme: 'erlang-dark' }} value={this.props.text.value} onChange={::this.handleChange} />
      </div>
    )
  }
}


