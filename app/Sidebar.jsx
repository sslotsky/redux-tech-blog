import React, {PropTypes, Component} from 'react'
import { Link } from 'react-router'

export default () => (
  <div className='sidebar pure-u-1 pure-u-md-1-4'>
    <div className='header'>
      <h1 className='brand-title'>Redux Blog</h1>
      <h2 className='brand-tagline'>Building apps with Redux</h2>

      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link className='pure-button' to='/posts/new'>New Post</Link>
          </li>
          <li className='nav-item'>
            <Link className='pure-button' to='/'>Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)
