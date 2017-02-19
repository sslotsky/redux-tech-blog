import React, { PropTypes, Component } from 'react'
import { Field } from 'redux-form'
import SnippetField from './SnippetField'
import { collapsible } from 'SHARED/decorators'

export class Snippet extends Component {
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

  render() {
    const { value: { language }, name } = this.props.input

    return (
      <div>
        <fieldset className="soft-half">
          <div className="form-group">
            <label>Language</label>
            <select value={language} onChange={::this.changeLanguage}>
              <option value='jsx'>JSX</option>
              <option value='javascript'>JavaScript</option>
              <option value='ruby'>Ruby</option>
            </select>
          </div>
          <Field
            name={`${name}.text`}
            component={SnippetField}
            language={language}
            label="Text"
          />
        </fieldset>
      </div>
    )
  }
}

export default collapsible(ownProps => ({
  title: `Snippet (${ownProps.input.value.language})`
}))(Snippet)
