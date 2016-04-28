const snippet1 = `
  import React, { PropTypes, Component } from 'react'
  import CodeMirror from 'react-codemirror'
  import 'codemirror/mode/javascript/javascript'

  export class Snippet extends Component {
    static propTypes = {
      language: PropTypes.object,
      text: PropTypes.object
    }

    handleChange(text) {
      this.props.text.onChange(text)
    }

    render() {
      return (
        <div>
          <CodeMirror options={{ mode: this.props.language.value, theme: 'erlang-dark' }} value={this.props.text.value} onChange={::this.handleChange} />
        </div>
      )
    }
  }
`

const snippet2 = `
  import React from 'react'
  import { Router, Route, IndexRoute, hashHistory } from 'react-router'
  import App from '../app/App'
  import { Index as Posts } from '../app/modules/posts/Index'
  import EditProfile from '../app/modules/profile/Edit'
  import New from '../app/modules/posts/New'

  export default (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Posts} />
        <Route path='profile' component={EditProfile} />
        <Route path='posts/new' component={New} />
      </Route>
    </Router>
  )
`
const snippet3 = `
  def foo
    'bar'
  end
`

export default {
    blocks: [{
    format: 'snippet',
    language: 'jsx',
    text: snippet1
  }, {
    format: 'snippet',
    language: 'jsx',
    text: snippet2
  }, {
    format: 'snippet',
    language: 'ruby',
    text: snippet3
  }]
}

