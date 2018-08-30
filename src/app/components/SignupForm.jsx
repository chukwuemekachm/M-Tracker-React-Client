import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    const { userSignupRequest, userError, history } = this.props;
    if (confirmPassword !== password) {
      userError('Passwords do not match');
      return;
    }
    userSignupRequest(this.state, history);
  }

  render() {
    const {
      firstname, lastname, email, password, confirmPassword,
    } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="firstName" className="ch-label">
          First Name
          {' '}
          <span className="ch-require">
            *
          </span>
          <input
            type="text"
            name="firstname"
            className="ch-input"
            required
            placeholder="First Name"
            value={firstname}
            onChange={this.onChange}
          />
        </label>
        <label htmlFor="lastname" className="ch-label">
          Last Name
          {' '}
          <span className="ch-require">
            *
          </span>
          <input
            type="text"
            name="lastname"
            className="ch-input"
            required
            placeholder="Last Name"
            value={lastname}
            onChange={this.onChange}
          />
        </label>
        <label htmlFor="email" className="ch-label">
          Email Address
          {' '}
          <span className="ch-require">
            *
          </span>
          <input
            type="email"
            name="email"
            className="ch-input"
            required
            placeholder="Email Address"
            value={email}
            onChange={this.onChange}
          />
        </label>
        <label htmlFor="password" className="ch-label">
          Password
          {' '}
          <span className="ch-require">
            *
          </span>
          <input
            type="password"
            name="password"
            className="ch-input"
            required
            placeholder="Password"
            value={password}
            onChange={this.onChange}
          />
        </label>
        <label htmlFor="confirmPassword" className="ch-label">
          Confirm Password
          {' '}
          <span className="ch-require">
            *
          </span>
          <input
            type="password"
            name="confirmPassword"
            className="ch-input"
            required
            placeholder="Password"
            value={confirmPassword}
            onChange={this.onChange}
          />
        </label>
        <button type="submit" className="ch-btn-flat">
          Signup
        </button>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  userError: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SignupForm;
