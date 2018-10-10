import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * @description Has the same API as the Route component
 * It verifies if the user is authenticated or not
 *
 * @param {object} component The component to be rendered
 * @param {boolean} authenticated The authentication state of the user
 * @param {array} rest Other props injected to the component
 *
 * @returns {object}
 * */
export const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      authenticated
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, null)(PrivateRoute);
