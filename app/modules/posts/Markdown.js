import React, { PropTypes, Component } from 'react'
import { Markdown } from './Show'

export default class extends Component {
  static propTypes = {
    text: PropTypes.object
  }

  handleChange(text) {
    this.props.text.onChange(text)
  }

  shouldComponentUpdate(nextProps) {
    return this.props.text.value != nextProps.text.value
  }

  render() {
    const { text } = this.props
    return (
      <Markdown text={text.value} onChange={::this.handleChange} />
    )
  }
}



