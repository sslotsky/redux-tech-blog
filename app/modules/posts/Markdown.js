import React, { PropTypes, Component } from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/markdown/markdown'

export class Markdown extends Component {
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
    return (
      <div>
        <CodeMirror options={{ mode: 'markdown', theme: 'erlang-dark' }} value={this.props.text.value} onChange={::this.handleChange} />
      </div>
    )
  }
}



