import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            DevConnector
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
            aria-controls="mobile-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {" "}
                  Developers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
