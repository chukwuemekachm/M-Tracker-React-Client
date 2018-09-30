import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

export class NavBar extends PureComponent {
  render() {
    const { authenticated } = this.props;
    return (
      <nav className="navbar navbar-expand-lg w3-flat-midnight-blue">
        <Link className="navbar-brand" to="/">
          <i className="icon ion-md-construct" />
          {' '}
          Maintenance Tracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarHidden"
          aria-controls="navbarHidden"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="icon ion-md-menu w3-text-white" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarHidden">
          <ul className="navbar-nav">
            <li className="nav-item">
              {
                !authenticated
                  ? (
                    <Link to="/login">
                      <button type="button" className="btn btn-success">
                        Login
                      </button>
                    </Link>
                  )
                  : (
                    <Link to="/">
                      <button type="button" className="btn btn-success">
                        Logout
                      </button>
                    </Link>
                  )
              }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, null)(NavBar);
