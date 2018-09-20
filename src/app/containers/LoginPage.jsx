import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';
import Alert from '../components/Alert';
import authActions from '../actions/authActions';
import loadingSvg from '../assets/svg/loading.svg';

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      error, message, loading, history, userLogin,
    } = this.props;
    return (
      <div>
        <NavBar />
        <div className="ch-row">
          <h2 className="ch-about">
            Login to access your Maintenance Tracker Account
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
            <LoginForm
              userLoginRequest={userLogin}
              history={history}
            />
            <p className="ch-right">
              {'Don\'t '}
              have an account?
              {' '}
              <Link to="/signup">
                Signup...
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  message: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  userLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  error: state.common.error,
  message: state.common.message,
  loading: state.common.loading,
  history: ownProps.history,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogin: (user, history, route) => (authActions.authAsync(user, history, route)),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
