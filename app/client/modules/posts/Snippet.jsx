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
      <fieldset className="soft-half">
        <h3>Snippet ({language})</h3>
        <div className="form-group">
          <label>Language</label>
          <select value={language} onChange={::this.changeLanguage}>
            <option value='jsx'>JSX</option>
            <option value='javascript'>JavaScript</option>
            <option value='ruby'>Ruby</option>
          </select>
        </div>
        <div className="form-group">
          <label>Text</label>
          <Snippet
            language={language}
            text={text}
            onChange={::this.handleChange}
          />
        </div>
      </fieldset>
    )
  }
}


