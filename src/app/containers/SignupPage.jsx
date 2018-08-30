import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import SignupForm from '../components/SignupForm';
import Alert from '../components/Alert';
import authActions from '../actions/authActions';
import { userError } from '../actions/commonActions';
import loadingSvg from '../assets/svg/loading.svg';

export class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      error, message, loading, history, userSignup, userErrorHandler,
    } = this.props;
    return (
      <div>
        <NavBar />
        <div className="ch-row">
          <h2 className="ch-about">
            Sign up to use Maintenance Tracker today
          </h2>
        </div>
        <div className="ch-row">
          <div className="ch-col-3">
            {
              error
                ? (
                  <Alert
                    message={message}
                    backgroundColor="#E74C3C"
                  />
                )
                : ''
            }
            {
              loading
                ? <img src={loadingSvg} alt="loading" />
                : ''
            }
          </div>
        </div>
        <div className="ch-row">
          <div className="ch-col-3 ch-panel ch-signup">
            <SignupForm
              userError={userErrorHandler}
              userSignupRequest={userSignup}
              history={history}
            />
            <p className="ch-right">
              Already have an account?
              {' '}
              <Link to="signin">
                Signin...
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  message: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  userErrorHandler: PropTypes.func.isRequired,
  userSignup: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  error: state.common.error,
  message: state.common.message,
  loading: state.common.loading,
  history: ownProps.history,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  userSignup: (user, history) => (authActions.signupAsync(user, history)),
  userErrorHandler: message => (userError(message)),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
