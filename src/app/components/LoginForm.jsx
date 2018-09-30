import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/css/auth.css';

const LoginForm = ({ bindValues, handleSubmit, handleChange }) => (
  <div className="row mb-4 auth-form">
    <div className="col-md-4" />
    <div className="col-md-4">
      <div className="card text-center">
        <h3 className="text-center mt-5">
          Login to access your account
        </h3>
        <i className="icon ion-md-construct text-center ion-icon" />
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-4">
              <input
                type="email"
                className="form-control text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={bindValues.email}
              />
            </div>
            <div className="input-group mb-4">
              <input
                type="password"
                className="form-control text"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={bindValues.password}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success btn-md btn-block mb-3"
            >
              Login
            </button>
            <span>
              Have no account?
              {' '}
              <Link to="/signup">
                Create one
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
    <div className="col-md-4" />
  </div>
);

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  bindValues: PropTypes.shape({}).isRequired,
};

export default LoginForm;
