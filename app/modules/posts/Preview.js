import React, { PropTypes, Component } from 'react'
import { SnippetPreview } from './Snippet'
import { MarkdownPreview } from './Markdown'

const components = {
  snippet: SnippetPreview,
  markdown: MarkdownPreview
}

export default class extends Component {
  static propTypes = {
    blocks: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        {
          this.props.blocks.map((b, i) => {
            const Component = components[b.format.value]
            return (
              <div className='preview'>
                <Component
                  key={`preview-blocks-${i}`}
                  {...b} />
              </div>
            )
          })
        }
      </div>
    )
  }
}
