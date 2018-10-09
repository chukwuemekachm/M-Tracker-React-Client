import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DefaultNavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';
import authActions from '../actions/authActions';
import Loader from '../components/Loader';

/**
 * @description Login Page component
 *
 * @class
 *
 * @extends React.Component
 */
export class LoginPage extends Component {
  /**
   * @constructor
   *
   * @param {object} props The injected props
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const { userLogin, history } = this.props;
    userLogin(this.state, history, 'login');
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
  loading: PropTypes.bool.isRequired,
  userLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export const mapStateToProps = (state, ownProps) => ({
  loading: state.common.loading,
  history: ownProps.history,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  userLogin: (user, history, route) => (authActions.authAsync(user, history, route)),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
