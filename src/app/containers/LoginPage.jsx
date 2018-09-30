import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DefaultNavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';
import authActions from '../actions/authActions';
import Loader from '../components/Loader';

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const { userLogin, history } = this.props;
    userLogin(this.state, history, 'login');
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        <DefaultNavBar />
        <LoginForm
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

LoginPage.propTypes = {
  // message: PropTypes.string.isRequired,
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
