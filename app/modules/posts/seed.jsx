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
## This is a heading

This is some **bold** and _italic_ text fodoisjoidjfoijdoijdfoijoeijofdijfoeijfoidjofiejfodijfoeifjoj

1. This
2. Is
3. An
4. Ordered
5. List

* This
* Is
* An
* Unordered
* List
`

export default {
  title: 'My First Post',
  blocks: [{
    format: 'video',
    url: 'https://www.youtube.com/watch?v=Im4zK7CR7mE'
  }, {
    format: 'snippet',
    language: 'jsx',
    text: snippet1
  }, {
    format: 'snippet',
    language: 'jsx',
    text: snippet2
  }, {
    format: 'markdown',
    text: snippet3
  }]
}

