import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import DefaultNavBar from '../components/NavBar';
import SignupForm from '../components/SignupForm';
import authActions from '../actions/authActions';
import { userError } from '../actions/commonActions';
import Loader from '../components/Loader';

/**
 * @description Login Page component
 *
 * @class
 *
 * @extends React.Component
 */
export class SignupPage extends Component {
  /**
   * @constructor
   *
   * @param {object} props The injected props
   */
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @description Handles the input change events
   * Updates the state value of the input field
   *
   * @function
   *
   * @param {object} event The event object
   */
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  /**
   * @description Handles the form submit event
   * Executes the create method to submit the form
   * Handle the result of the response
   *
   * @function
   *
   * @param {object} event The event object
   */
  handleSubmit(event) {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    const { userSignup, userErrorHandler, history } = this.props;
    if (confirmPassword !== password) {
      userErrorHandler('Confirm Password must match the Password');
      toastr.error('Confirm Password must match the Password');
      return false;
    }
    userSignup(this.state, history, 'signup');
    return true;
  }

  /**
   * @description Renders the component on a dom node
   *
   * @function
   *
   * @returns {object} The components to render
   */
  render() {
    const { loading } = this.props;
    return (
      <div>
        <DefaultNavBar />
        <SignupForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          bindValues={this.state}
        />
        {
          loading
            ? <Loader />
            : ''
        }
      </div>
    );
  }
}

SignupPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  userErrorHandler: PropTypes.func.isRequired,
  userSignup: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  error: state.common.error,
  message: state.common.message,
  loading: state.common.loading,
  history: ownProps.history,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  userSignup: (user, history, route) => (authActions.authAsync(user, history, route)),
  userErrorHandler: message => (userError(message)),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
