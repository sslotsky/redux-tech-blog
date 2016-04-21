import React, {PropTypes, Component} from 'react'

export default class extends Component {
  render() {
    return (
      <div className='sidebar pure-u-1 pure-u-md-1-4'>
        <div className='header'>
          <h1 className='brand-title'>Redux Blog</h1>
          <h2 className='brand-tagline'>Building apps with Redux</h2>

          <nav className='nav'>
            <ul className='nav-list'>
              <li className='nav-item'>
                <a className='pure-button' href='http://purecss.io'>Pure</a>
              </li>
              <li className='nav-item'>
                <a className='pure-button' href='http://yuilibrary.com'>YUI Library</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
