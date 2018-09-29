import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    let { size } = this.state;
    size = size === 'none' ? 'block' : 'none';
    this.setState({ size });
  }

  render() {
    const { size } = this.state;
    const { authenticated } = this.props;
    return (
      <nav>
        <ul className="ch-nav ch-card">
          <li>
            <h2>
              <Link to="/">
                <i className="icon ion-md-construct" />
                {' '}
                Maintenance Tracker
              </Link>
              <i className="icon ion-md-menu" id="menu" onClick={this.toggleMenu} />
            </h2>
          </li>
          <div className="ch-nav-right" id="nav" style={{ display: size }}>
            <li>
              {
                authenticated
                  ? (
                    <Link to="/">
                      Logout
                    </Link>
                  )
                  : (
                    <Link to="/login">
                      Login
                    </Link>
                  )
              }
            </li>
          </div>
        </ul>
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
