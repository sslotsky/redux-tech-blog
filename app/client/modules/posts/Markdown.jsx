import React, { PropTypes, Component } from 'react'
import { Markdown as ShowMarkdown } from './Show'
import { collapsible } from 'SHARED/decorators'

export class Markdown extends Component {
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
      <div>
        <fieldset className="soft-half">
          <div className="form-group">
            <label>Text</label>
            <ShowMarkdown text={text} onChange={::this.handleChange} />
          </div>
        </fieldset>
      </div>
    )
  }
}

export default collapsible(ownProps => ({
  title: 'Markdown'
}))(Markdown)
