import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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

    const { userLoginRequest, history } = this.props;
    userLoginRequest(this.state, history, 'login');
  }

  render() {
    const {
      email, password,
    } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
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
        <button type="submit" className="ch-btn-flat">
          Login
        </button>
      </form>
    );
  }
}
LoginForm.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default LoginForm;
