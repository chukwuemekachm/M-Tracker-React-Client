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

export class SignupPage extends Component {
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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    const { userSignup, userErrorHandler, history } = this.props;
    if (confirmPassword !== password) {
      userErrorHandler('Confirm Password must match the Password');
      toastr.error('Confirm Password must match the Password');
      return;
    }
    userSignup(this.state, history, 'signup');
  }

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
