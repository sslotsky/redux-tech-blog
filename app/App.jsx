import React from 'react'
import { Link } from 'react-router'
import Sidebar from './Sidebar'
import ToggleSession from './modules/session/components/ToggleSession'
import '../style.scss'

export default ({ children }) => (
  <div>
    <header>
      <h1>Violet Marmalade</h1>
      <small>....mmmmmmm, spread it</small>
    </header>
    <nav>
      <ToggleSession />
      <Link to='/'>New Post</Link>
    </nav>
    <main className="row">
      <Sidebar />
      {children}
    </main>
  </div>
)

