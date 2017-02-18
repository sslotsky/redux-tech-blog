import React, { PropTypes, Component } from 'react'
import { Field } from 'redux-form'
import { Markdown as MarkdownField } from './components/Editor/blockTypes'
import { collapsible } from 'SHARED/decorators'

export class Markdown extends Component {
  static propTypes = {
    input: PropTypes.object
  }

  render() {
    const { name } = this.props.input

    return (
      <div>
        <fieldset className="soft-half">
          <Field
            name={`${name}.text`}
            component={MarkdownField}
          />
        </fieldset>
      </div>
    )
  }
}

export default collapsible(ownProps => ({
  title: 'Markdown'
}))(Markdown)
