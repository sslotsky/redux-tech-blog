import React, { PropTypes, Component } from 'react'
import Sidebar from './Sidebar'
import '../style.scss'

export default class extends Component {
  render() {
    return (
      <div id='layout' className='pure-g'>
        <Sidebar />
        <div className='content pure-u-1 pure-u-md-3-4'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
