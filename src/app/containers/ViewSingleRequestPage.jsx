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
import getAllRequests, { modifyRequestStatus } from '../actions/adminRequestActions';
import UserDetails from '../components/UserDetails';
import DeleteRequest from '../components/DeleteRequest';

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
    this.handleDelete = this.handleDelete.bind(this);
  }

  /**
   * @description Calls the viewRequest method to fetch a single request belonging to the user
   *
   * @function
   */
  componentDidMount() {
    const {
      match, viewRequest,
    } = this.props;

    const { requestId } = match.params;
    viewRequest(Number.parseInt(requestId, 10));
  }

  /**
   * @description Handles admin approve, resolve and disapprove request actions
   *
   * @param {number} requestId The id of the request to be modified
   * @param {string} action The action to be performed on the request
   *
   * @returns {object}
   */
  handleModification(requestId, action) {
    const { modifyRequestAdmin, history } = this.props;
    return modifyRequestAdmin(requestId, action).then((response) => {
      if (response.code === 401) return history.push('/login');
      return true;
    });
  }

  /**
   * @description Handles the user delete action
   *
   * @returns {object}
   */
  handleDelete() {
    const { deleteRequest, request, history } = this.props;
    const { id: requestId } = request;
    return deleteRequest(requestId).then((response) => {
      if (response.code === 401) return history.push('/login');
      return history.push('/dashboard');
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
      request = {}, requests, createRequest, history,
      updateRequest, admin,
    } = this.props;
    return (
      <div>
        <div className="dashboard-body single-request">
          <DefaultNavBar />
          <div className="container">
            <div className="row  mt-5">
              <div className="col-md-3">
                <SideNav requests={requests} handleNavigation={navigateFilter} />
              </div>
              <div className="col-md-9">
                <div>
                  <div className="d-flex justify-content-end">
                    {
                      request.title && admin
                        ? (
                          <React.Fragment>
                            {
                              request.status === 'pending'
                                ? (
                                  <React.Fragment>
                                    <div className="ml-2 bd-highlight" title="Appove request">
                                      <i className="icon ion-md-checkmark ion-icon-button" name="approveIcon" onClick={() => this.handleModification(request.id, 'approve')} />
                                    </div>
                                    <div className="ml-2 bd-highlight" title="Disappove request">
                                      <i className="icon ion-md-close-circle-outline ion-icon-button" name="disapproveIcon" onClick={() => this.handleModification(request.id, 'disapprove')} />
                                    </div>
                                  </React.Fragment>
                                )
                                : ''
                            }
                            {
                              request.status === 'approved'
                                ? (
                                  <div className="ml-2 bd-highlight" title="Resolve request">
                                    <i className="icon ion-md-checkmark-circle-outline ion-icon-button" name="resolveIcon" onClick={() => this.handleModification(request.id, 'resolve')} />
                                  </div>
                                )
                                : ''
                            }
                          </React.Fragment>
                        )
                        : ''
                    }
                    {
                      request.title && !admin
                        ? (
                          <React.Fragment>
                            {
                              request.status === 'pending' || request.status === 'disapproved' || request.status === 'resolved'
                                ? (
                                  <div className="ml-2 bd-highlight" title="Delete request">
                                    <i
                                      className="icon ion-md-trash ion-icon-button"
                                      name="deleteIcon"
                                      data-toggle="modal"
                                      data-target="#deleteRequest"
                                    />
                                  </div>
                                )
                                : ''
                            }
                            {
                              request.status === 'pending'
                                ? (
                                  <div className="ml-2 bd-highlight" title="Update request">
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
                    <div className="ml-2 bd-highlight" title="Goto dashboard">
                      <Link to="/dashboard">
                        <i className="icon ion-md-arrow-round-back ion-icon-button" />
                      </Link>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row mt-3">
                  <div className="col-md-8">
                    {
                      request.title ? (<ViewSingleRequest admin={admin} {...request} />)
                        : (
                          <p>
                            The request you are looking for does not exist.
                          </p>
                        )
                    }
                  </div>
                  <div className="col-md-4">
                    {
                      admin && request.title
                        ? (<UserDetails {...request} />)
                        : ''

                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CreateRequestForm history={history} create={createRequest} />
        <DeleteRequest handleClick={this.handleDelete} />
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
  modifyRequestAdmin: PropTypes.func.isRequired,
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
  modifyRequestAdmin: (requestId, action) => (modifyRequestStatus(requestId, action)),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ViewSingleRequestPage);
