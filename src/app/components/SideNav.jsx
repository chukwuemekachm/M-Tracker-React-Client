import React from 'react';
import PropTypes from 'prop-types';

const SideNav = ({ requests }) => (
  <ul className="list-group mb-3">
    <li className="list-group-item d-flex justify-content-between align-items-center" data-toggle="modal" data-target="#createRequest">
      Create Request
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      All Requests
      <span className="badge badge-primary badge-pill">
        {requests ? requests.length : 0}
      </span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Pending Requests
      <span className="badge badge-primary badge-pill">
        {requests ? requests.filter(request => request.status === 'pending').length : 0}
      </span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Approved Requests
      <span className="badge badge-primary badge-pill">
        {requests ? requests.filter(request => request.status === 'approved').length : 0}
      </span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Resolved Requests
      <span className="badge badge-primary badge-pill">
        {requests ? requests.filter(request => request.status === 'resolved').length : 0}
      </span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      Dis-approved Requests
      <span className="badge badge-primary badge-pill">
        {requests ? requests.filter(request => request.status === 'disapproved').length : 0}
      </span>
    </li>
  </ul>
);

SideNav.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default SideNav;
