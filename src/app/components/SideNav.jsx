import React from 'react';
import PropTypes from 'prop-types';

const SideNav = ({ requests, handleNavigation }) => (
  <ul className="list-group mb-3">
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      data-toggle="modal"
      data-target="#createRequest"
    >
      Create Request
    </li>
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      onClick={() => handleNavigation('all')}
    >
      All Requests
      <span className="badge badge-primary badge-pill">
        {requests ? requests.length : 0}
      </span>
    </li>
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      onClick={() => handleNavigation('pending')}
    >
      Pending Requests
      <span className="badge badge-primary badge-pill">
        {requests ? requests.filter(request => request.status === 'pending').length : 0}
      </span>
    </li>
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      onClick={() => handleNavigation('approved')}
    >
      Approved Requests
      <span className="badge badge-primary badge-pill">
        {requests ? requests.filter(request => request.status === 'approved').length : 0}
      </span>
    </li>
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      onClick={() => handleNavigation('resolved')}
    >
      Resolved Requests
      <span className="badge badge-primary badge-pill">
        {requests ? requests.filter(request => request.status === 'resolved').length : 0}
      </span>
    </li>
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      onClick={() => handleNavigation('disapproved')}
    >
      Dis-approved Requests
      <span className="badge badge-primary badge-pill">
        {requests ? requests.filter(request => request.status === 'disapproved').length : 0}
      </span>
    </li>
  </ul>
);

SideNav.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleNavigation: PropTypes.func.isRequired,
};

export default SideNav;
