import React from 'react'
import Sidebar from './Sidebar'
import '../style.scss'

export default ({ children }) => (
  <main className="row">
    <Sidebar />
    {children}
  </main>
)
