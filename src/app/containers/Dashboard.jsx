import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DefaultNavBar from '../components/NavBar';
import userRequestActions from '../actions/userRequestActions';
import UserRequest from '../components/UserRequest';
import '../assets/css/dashboard.css';
import SideNav from '../components/SideNav';
import CreateRequestForm from '../components/CreateRequest';
import filterRequests, { navigateFilter } from '../actions/filterRequestsAction';
import getAllRequests from '../actions/adminRequestActions';

/**
 * @description Dashboard component
 *
 * @class
 *
 * @extends React.Component
 */
export class Dashboard extends Component {
  /**
   * @constructor
   *
   * @param {object} props The injected props
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * @description Evaluates the user's authentication
   * Calls the getRequest method to fetch the user's request
   *
   * @function
   */
  componentDidMount() {
    const {
      authenticated, history, getRequests, filter, admin, getAdminRequests,
    } = this.props;
    if (!authenticated) {
      return history.push('/login');
    }
    if (admin) {
      return getAdminRequests().then((response) => {
        if (response.code === 401) return history.push('/login');
        const { search } = history.location;
        return filter(search.substring(1));
      });
    }
    return getRequests().then((response) => {
      if (response.code === 401) return history.push('/login');
      const { search } = history.location;
      return filter(search.substring(1));
    });
  }

  /**
   * @description Renders the component on a dom node
   *
   * @function
   *
   * @returns {object} The components to render
   */
  render() {
    const {
      requests, history, createRequest, filteredRequests,
    } = this.props;
    return (
      <div>
        <div className="dashboard-body">
          <DefaultNavBar />
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-3">
                <SideNav requests={requests} handleNavigation={navigateFilter} />
              </div>
              <div className="col-md-8">
                {
                  filteredRequests[0]
                    ? filteredRequests.map(request => (
                      <Link to={`/${request.id}`} key={request.id}>
                        <UserRequest key={request.id} {...request} />
                      </Link>
                    ))
                    : (
                      <div>
                        {
                          requests[0] && !filteredRequests[0]
                            ? (
                              <p className="text-center">
                                No requests exist for this category
                              </p>
                            )
                            : (
                              <p className="text-center">
                                You have no requests please click the
                                {' '}
                                create request button to make a new request.
                              </p>
                            )
                        }
                      </div>
                    )
                }
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
        <CreateRequestForm history={history} create={createRequest} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.object).isRequired,
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
  getRequests: PropTypes.func.isRequired,
  createRequest: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  filteredRequests: PropTypes.arrayOf(PropTypes.object).isRequired,
  getAdminRequests: PropTypes.func.isRequired,
  admin: PropTypes.bool.isRequired,
};

export const mapStateToProps = (state, ownprops) => ({
  requests: state.requests.allRequests,
  filteredRequests: state.requests.filteredRequests,
  authenticated: state.auth.authenticated,
  history: ownprops.history,
  admin: state.auth.user.admin,
});

export const mapDispatchToProps = dispatch => ({
  getAdminRequests: () => dispatch(getAllRequests()),
  getRequests: () => dispatch(userRequestActions.getAllAsync()),
  createRequest: payload => dispatch(userRequestActions.createRequest(payload)),
  filter: payload => dispatch(filterRequests(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
