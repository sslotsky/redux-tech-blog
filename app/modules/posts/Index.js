import React, { PropTypes, Component } from 'react'

export class Index extends Component {
  render() {
    return (
      <div className="posts">
          <h1 className="content-subhead">Recent Posts</h1>

          <section className="post">
              <header className="post-header">
                <img className="post-avatar" alt="Eric Ferraiuolo&#x27;s avatar" height="48" width="48" src="img/common/ericf-avatar.png" />

                  <h2 className="post-title">Everything You Need to Know About Grunt</h2>

                  <p className="post-meta">
                      By <a className="post-author" href="#">Eric Ferraiuolo</a> under <a className="post-category post-category-js" href="#">JavaScript</a>
                  </p>
              </header>

              <div className="post-description">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
              </div>
          </section>

          <section className="post">
              <header className="post-header">
                <img className="post-avatar" alt="Reid Burke&#x27;s avatar" height="48" width="48" src="img/common/reid-avatar.png" />

                  <h2 className="post-title">Photos from CSSConf and JSConf</h2>

                  <p className="post-meta">
                      By <a className="post-author" href="#">Reid Burke</a> under <a className="post-category" href="#">Uncategorized</a>
                  </p>
              </header>

              <div className="post-description">
                  <div className="post-images pure-g">
                      <div className="pure-u-1 pure-u-md-1-2">
                          <a href="http://www.flickr.com/photos/uberlife/8915936174/">
                              <img alt="Photo of someone working poolside at a resort"
                                   className="pure-img-responsive"
                                   src="http://farm8.staticflickr.com/7448/8915936174_8d54ec76c6.jpg" />
                          </a>

                          <div className="post-image-meta">
                              <h3>CSSConf Photos</h3>
                          </div>
                      </div>

                      <div className="pure-u-1 pure-u-md-1-2">
                          <a href="http://www.flickr.com/photos/uberlife/8907351301/">
                              <img alt="Photo of the sunset on the beach"
                                   className="pure-img-responsive"
                                   src="http://farm8.staticflickr.com/7382/8907351301_bd7460cffb.jpg" />
                          </a>

                          <div className="post-image-meta">
                              <h3>JSConf Photos</h3>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="post">
              <header className="post-header">
                <img className="post-avatar" alt="Andrew Wooldridge&#x27;s avatar" height="48" width="48" src="img/common/andrew-avatar.png" />

                  <h2 className="post-title">YUI 3.10.2 Released</h2>

                  <p className="post-meta">
                      By <a className="post-author" href="#">Andrew Wooldridge</a> under <a className="post-category post-category-yui" href="#">YUI</a>
                  </p>
              </header>

              <div className="post-description">
                  <p>
                      We are happy to announce the release of YUI 3.10.2! You can find it now on the Yahoo! CDN, download it directly, or pull it in via npm. We’ve also updated the YUI Library website with the latest documentation.
                  </p>
              </div>
          </section>
      </div>
    )
  }
}

