import React, { PropTypes, Component } from 'react'
import { Markdown } from './Show'

export default class extends Component {
  static propTypes = {
    input: PropTypes.object
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
    const { text } = this.props.input.value
    const { value } = nextProps.input

    return text != value.text
  }

  render() {
    const { text } = this.props.input.value

    return (
      <Markdown text={text} onChange={::this.handleChange} />
    )
  }
}

