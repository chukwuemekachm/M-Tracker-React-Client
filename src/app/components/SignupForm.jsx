import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/css/auth.css';

/**
 * @description The Sign up form component
 *
 * @param {object} bindValues The user details to bind to the input fields
 * @param {function} handleSubmit The method to handle form submission
 * @param {function} handleChange The method to handle input changes
 *
 * @returns {object}
 */
const SignupForm = ({ bindValues, handleSubmit, handleChange }) => (
  <div className="row mb-4 auth-form">
    <div className="col-md-4" />
    <div className="col-md-4">
      <div className="card text-center">
        <h3 className="text-center mt-5">
          Sign up to use Maintenance Tracker
        </h3>
        <i className="icon ion-md-construct text-center ion-icon" />
        <div className="card-body mb-4 p-4">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control text"
                placeholder="First name"
                name="firstname"
                onChange={handleChange}
                value={bindValues.firstname}
              />
            </div>
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control text"
                placeholder="Last name"
                name="lastname"
                onChange={handleChange}
                value={bindValues.lastname}
              />
            </div>
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
            <div className="input-group mb-4">
              <input
                type="password"
                className="form-control text"
                placeholder="Confirm password"
                name="confirmPassword"
                onChange={handleChange}
                value={bindValues.confirmPassword}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success btn-md btn-block mb-3"
            >
              Signup
            </button>
            <span>
              Have an account?
              {' '}
              <Link to="/login">
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
    <div className="col-md-4" />
  </div>
);

SignupForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  bindValues: PropTypes.shape({}).isRequired,
};

export default SignupForm;
