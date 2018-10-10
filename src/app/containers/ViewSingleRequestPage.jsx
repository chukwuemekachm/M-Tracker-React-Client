import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import DefaultNavBar from '../components/NavBar';
import ViewSingleRequest from '../components/ViewSingleRequest';
import SideNav from '../components/SideNav';
import userRequestActions from '../actions/userRequestActions';
import CreateRequestForm from '../components/CreateRequest';
import '../assets/css/viewSingleRequest.css';
import { navigateFilter } from '../actions/filterRequestsAction';
import UpdateRequestForm from '../components/UpdateRequest';
import getAllRequests from '../actions/adminRequestActions';
import UserDetails from '../components/UserDetails';

/**
 * @description View Single request Page component
 *
 * @class
 *
 * @extends React.Component
 */
export class ViewSingleRequestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const { getRequests, admin, getAdminRequests } = this.props;
    switch (admin) {
      case true:
        getAdminRequests();
        break;
      default:
        getRequests();
        break;
    }
  }

  /**
   * @description Evaluates the user's authentication
   * Calls the viewRequest method to fetch a single request belonging to the user
   *
   * @function
   */
  componentDidMount() {
    const {
      match, viewRequest, history, authenticated,
    } = this.props;
    if (!authenticated) {
      history.push('/login');
    }
    const { requestId } = match.params;
    viewRequest(Number.parseInt(requestId, 10));
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
      request = {}, requests, createRequest, history, deleteRequest, updateRequest, admin,
    } = this.props;
    return (
      <div>
        <div className="dashboard-body">
          <DefaultNavBar />
          <div className="container">
            <div className="row  mt-5">
              <div className="col-md-3">
                <SideNav requests={requests} handleNavigation={navigateFilter} />
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-center">
                  <div className="p-3 bd-highlight">
                    <Link to="/dashboard">
                      <i className="icon ion-md-arrow-round-back ion-icon-button" />
                    </Link>
                  </div>
                  {
                    request.title && !admin
                      ? (
                        <React.Fragment>
                          {
                            request.status === 'pending' || request.status === 'disapproved' || request.status === 'resolved'
                              ? (
                                <div className="p-3 bd-highlight">
                                  <i className="icon ion-md-trash ion-icon-button" name="deleteIcon" onClick={() => deleteRequest(request.id)} />
                                </div>
                              )
                              : ''
                          }
                          {
                            request.status === 'pending'
                              ? (
                                <div className="p-3 bd-highlight">
                                  <i
                                    className="icon ion-md-create ion-icon-button"
                                    data-toggle="modal"
                                    data-target="#updateRequest"
                                  />
                                </div>
                              )
                              : ''
                          }
                        </React.Fragment>
                      )
                      : ''
                  }
                </div>
                {
                  request.title ? (<ViewSingleRequest admin={admin} {...request} />)
                    : (
                      <p>
                        The request you are looking for does not exist.
                      </p>
                    )
                }
              </div>
              <div className="col-md-3">
                {
                  admin && request.title
                    ? (<UserDetails {...request} />)
                    : ''

                }
              </div>
            </div>
          </div>
        </div>
        <CreateRequestForm history={history} create={createRequest} />
        {
          request.title
            ? (<UpdateRequestForm history={history} update={updateRequest} request={request} />)
            : ''
        }
      </div>
    );
  }
}

ViewSingleRequestPage.propTypes = {
  request: PropTypes.shape({}).isRequired,
  requests: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  viewRequest: PropTypes.func.isRequired,
  getRequests: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  createRequest: PropTypes.func.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  updateRequest: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  getAdminRequests: PropTypes.func.isRequired,
  admin: PropTypes.bool.isRequired,
};

export const mapStateToProps = (state, ownProps) => ({
  requests: state.requests.allRequests,
  request: state.requests.currentRequest,
  history: ownProps.history,
  match: ownProps.match,
  authenticated: state.auth.authenticated,
  admin: state.auth.user.admin,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  viewRequest: payload => (userRequestActions.getSingleRequest(payload)),
  getRequests: () => (userRequestActions.getAllAsync()),
  createRequest: payload => (userRequestActions.createRequest(payload)),
  deleteRequest: payload => (userRequestActions.deleteRequest(payload)),
  updateRequest: payload => (userRequestActions.updateRequest(payload)),
  getAdminRequests: () => (getAllRequests()),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ViewSingleRequestPage);
