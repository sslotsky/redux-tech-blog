import React, { PropTypes, Component } from 'react'
import { Snippet } from './Show'

export default class extends Component {
  static propTypes = {
    input: PropTypes.object
  }

  changeLanguage(e) {
    const { input } = this.props
    const val = {
      ...input.value,
      language: e.target.value
    }

    input.onChange(val)
  }

  handleChange(text) {
    const { input } = this.props
    const val = {
      ...input.value,
      text
    }

    input.onChange(val)
  }

  shouldComponentUpdate(nextProps) {
    const { text, language } = this.props.input.value
    const { value } = nextProps.input

    return text != value.text || language != value.language
  }

  render() {
    const { language, text } = this.props.input.value

    return (
      <div>
        <select value={language} onChange={::this.changeLanguage}>
          <option value='jsx'>JSX</option>
          <option value='javascript'>JavaScript</option>
          <option value='ruby'>Ruby</option>
        </select>
        <Snippet
          language={language}
          text={text}
          onChange={::this.handleChange} />
      </div>
    )
  }
}


