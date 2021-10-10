import React, { Component } from 'react';
import "./style.css"

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className="footer-content">
          <div>
            <p>
              Becki Wordsworth <br />
              <a href="/contact-me/" title="Contact Becki Wordsworth">Contact Me</a></p>
          </div>

          <div className="footer-last">
            <p>
              Twitter: <a href="https://twitter.com/BeckiWordsworth" target="_blank" title="Becki Wordsworth on Twitter">@BeckiWordsworth</a> <br />
              LinkedIn: <a href="https://www.linkedin.com/in/beckiwordsworth/" target="_blank" title="Becki Wordsworth on LinkedIn">/in/beckiwordsworth</a>
            </p>
          </div>
        </div>
      </footer>
    )
  }

}


export default Footer
