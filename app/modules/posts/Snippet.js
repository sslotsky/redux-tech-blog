import React, { PropTypes, Component } from 'react'
import { Snippet } from './Show'

export default class extends Component {
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
    const { language, text } = this.props
    return (
      <div>
        <select value={this.props.language.value} onChange={::this.changeLanguage}>
          <option value='jsx'>JSX</option>
          <option value='javascript'>JavaScript</option>
          <option value='ruby'>Ruby</option>
        </select>
        <Snippet
          language={language.value}
          text={text.value}
          onChange={::this.handleChange} />
      </div>
    )
  }
}


