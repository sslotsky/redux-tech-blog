import React, { PropTypes, Component } from 'react'
import { Field } from 'redux-form'
import { Select } from 'react-violet-forms'
import SnippetField from './SnippetField'
import { collapsible } from 'SHARED/decorators'
import { CloseWindow } from 'SHARED/components'

const languageOptions = [{
  value: 'jsx',
  text: 'JSX',
}, {
  value: 'javascript',
  text: 'JavaScript'
}, {
  value: 'ruby',
  text: 'Ruby'
}]

const themeOptions = [
  '3024-day',
  '3024-night',
  'abcdef',
  'ambiance-mobile',
  'ambiance',
  'base16-dark',
  'base16-light',
  'bespin',
  'blackboard',
  'cobalt',
  'colorforth',
  'dracula',
  'duotone-dark',
  'duotone-light',
  'eclipse',
  'elegant',
  'erlang-dark',
  'hopscotch',
  'icecoder',
  'isotope',
  'lesser-dark',
  'liquibyte',
  'material',
  'mbo',
  'mdn-like',
  'midnight',
  'monokai',
  'neat',
  'neo',
  'night',
  'panda-syntax',
  'paraiso-dark',
  'paraiso-light',
  'pastel-on-dark',
  'railscasts',
  'rubyblue',
  'seti',
  'solarized',
  'the-matrix',
  'tomorrow-night-bright',
  'tomorrow-night-eighties',
  'ttcn',
  'twilight',
  'vibrant-ink',
  'xq-dark',
  'xq-light',
  'yeti',
  'zenburn'
].map(theme => ({ text: theme, value: theme }))

export function Snippet({ removeBlock, input: { name, value: { language, theme } } }) {
  return (
    <div>
      <fieldset className="soft-half relative">
        <CloseWindow close={removeBlock} />
        <div className="form-group">
          <Field
            name={`${name}.language`}
            component={Select}
            options={languageOptions}
            label="Language"
          />
          <Field
            name={`${name}.theme`}
            component={Select}
            options={themeOptions}
            label="Theme"
          />
        </div>
        <Field
          name={`${name}.text`}
          component={SnippetField}
          language={language}
          theme={theme}
          label="Text"
        />
      </fieldset>
    </div>
  )
}

export default collapsible(ownProps => ({
  title: `Snippet (${ownProps.input.value.language})`
}))(Snippet)
