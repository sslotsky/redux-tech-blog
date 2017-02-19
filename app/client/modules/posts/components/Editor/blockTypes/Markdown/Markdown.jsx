import React, { PropTypes, Component } from 'react'
import { Field } from 'redux-form'
import MarkdownField from './MarkdownField'
import { collapsible } from 'SHARED/decorators'
import { CloseWindow } from 'SHARED/components'

export class Markdown extends Component {
  static propTypes = {
    input: PropTypes.object
  }

  render() {
    const { input: { name }, removeBlock } = this.props

    return (
      <div>
        <fieldset className="soft-half relative">
          <CloseWindow close={removeBlock} />
          <Field
            name={`${name}.text`}
            component={MarkdownField}
            label="Text"
          />
        </fieldset>
      </div>
    )
  }
}

export default collapsible(ownProps => ({
  title: 'Markdown'
}))(Markdown)
