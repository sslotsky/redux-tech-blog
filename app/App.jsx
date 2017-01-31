import React from 'react'
import { Link } from 'react-router'
import Sidebar from './Sidebar'
import '../style.scss'

export default ({ children }) => (
  <div>
    <header>
      <h1>Violet Marmalade</h1>
      <small>....mmmmmmm, spread it</small>
    </header>
    <nav>
      <Link to='/login'>Login</Link>
      <Link to='/'>New Post</Link>
    </nav>
    <main className="row">
      <Sidebar />
      {children}
    </main>
  </div>
)
