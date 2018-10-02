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

export class ViewSingleRequestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const { getRequests } = this.props;
    getRequests();
  }

  componentDidMount() {
    const { match, viewRequest } = this.props;
    const { requestId } = match.params;
    viewRequest(Number.parseInt(requestId, 10));
  }

  render() {
    const {
      request = {}, requests, createRequest, history, deleteRequest,
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
                  <div className="p-3 bd-highlight">
                    <i className="icon ion-md-trash ion-icon-button" onClick={() => deleteRequest(request.id)} />
                  </div>
                  <div className="p-3 bd-highlight">
                    <i className="icon ion-md-create ion-icon-button" />
                  </div>
                </div>
                {
                  request.title ? (<ViewSingleRequest {...request} />)
                    : (
                      <p>
                        The request you are looking for does not exist.
                      </p>
                    )
                }
              </div>
              <div className="col-md-3" />
            </div>
          </div>
        </div>
        <CreateRequestForm history={history} create={createRequest} />
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
};

const mapStateToProps = (state, ownProps) => ({
  requests: state.requests.allRequests,
  request: state.requests.currentRequest,
  history: ownProps.history,
  match: ownProps.match,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  viewRequest: payload => (userRequestActions.getSingleRequest(payload)),
  getRequests: () => (userRequestActions.getAllAsync()),
  createRequest: payload => (userRequestActions.createRequest(payload)),
  deleteRequest: payload => (userRequestActions.deleteRequest(payload)),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ViewSingleRequestPage);
