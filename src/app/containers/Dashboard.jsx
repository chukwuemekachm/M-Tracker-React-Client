import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import SideNav from '../components/SideNav';
import NavBar from '../components/NavBar';
import UserRequest from '../components/UserRequest';
import { userError } from '../actions/commonActions';
import userRequestActions from '../actions/userRequestActions';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { isAuthenticated, history, getRequests } = this.props;
    if (!isAuthenticated) {
      history.push('/login');
    }
    getRequests();
  }

  /* eslint-disable class-methods-use-this */
  formatRequest(status) {
    switch (status) {
      case 'approved':
        return 'ch-requests ch-approve';
      case 'disapproved':
        return 'ch-requests ch-disapprove';
      case 'resolved':
        return 'ch-requests ch-resolve';
      default:
        return 'ch-requests ch-pending';
    }
  }

  render() {
    const { requests } = this.props;
    return (
      <div>
        <NavBar />
        <SideNav />
        <div className="ch-row">
          <div className="ch-col-2" />
          <div className="ch-col-9" id="user-display">
            <h2 className="ch-display">
              <i className="icon ion-md-speedometer" />
              {' '}
              Dashboard
            </h2>
            {requests.map(request => (
              <UserRequest
                key={request.id}
                {...request}
                format={this.formatRequest(request.status)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.object).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  getRequests: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownprops) => ({
  requests: state.requests,
  isAuthenticated: state.auth.authenticated,
  history: ownprops.history,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getRequests: () => (userRequestActions.getAllAsync()),
  userErrorHandler: message => (userError(message)),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
