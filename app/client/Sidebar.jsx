import React, {PropTypes, Component} from 'react'
import { Link } from 'react-router'
import { authenticated } from './shared/decorators'

const AuthLink = authenticated(({ children, ...rest }) => (
  <Link {...rest}>{children}</Link>
))

export default () => (
  <div className="sidebar soft-quarter pure-u-1-8">
    <div className='header'>
      <h1 className='brand-title'>Redux Blog</h1>
      <h2 className='brand-tagline'>Building apps with Redux</h2>

      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <AuthLink className='pure-button' to='/posts/new'>New Post</AuthLink>
          </li>
          <li className='nav-item'>
            <Link className='pure-button' to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)
