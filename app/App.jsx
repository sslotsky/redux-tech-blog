import React from 'react'
import Sidebar from './Sidebar'
import '../style.scss'

export default ({ children }) => (
  <div id='layout' className='pure-g'>
    <Sidebar />
    <div className='content pure-u-1 pure-u-md-3-4'>
      {children}
    </div>
  </div>
)
