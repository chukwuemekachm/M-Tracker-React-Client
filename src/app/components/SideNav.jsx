import React from 'react';
import PropTypes from 'prop-types';

const SideNav = ({ toggleCreateModal }) => (
  <div className="ch-side-nav" id="side-nav">
    <i className="icon ion-md-construct ch-about-icon" />
    <h3>
      Maintenance Tracker
    </h3>
    <h5 className="ch-green">
    maintenancetracker.info@gmail.com
    </h5>
    <ul>
      <li id="user-sync">
        <h5>
          <i className="icon ion-md-sync" />
          {' '}
          All requests
        </h5>
      </li>
      <li id="user-approve">
        <h5>
          <i className="icon ion-md-checkmark" />
          {' '}
          Approved requests
        </h5>
      </li>
      <li id="user-disapprove">
        <h5>
          <i className="icon ion-md-close" />
          {' '}
          Dispproved requests
        </h5>
      </li>
      <li id="user-pending">
        <h5>
          <i className="icon ion-md-infinite" />
          {' '}
          Pending requests
        </h5>
      </li>
      <li id="user-resolve">
        <h5>
          <i className="icon ion-md-done-all" />
          {' '}
          Resolved requests
        </h5>
      </li>
    </ul>
    <button
      type="button"
      className="ch-btn-round"
      onClick={() => toggleCreateModal()}
    >
      <i className="icon ion-md-add" />
      {' '}
      Create Request
    </button>
    <ul>
      <li>
        <h5>
          <i className="icon ion-md-person" />
          {' '}
           My Profile
        </h5>
      </li>
      <li>
        <h5>
          <i className="icon ion-md-create" />
          {' '}
          Update Profile
        </h5>
      </li>
      <li>
        <h5>
          <i className="icon ion-md-key" />
          {' '}
          Change Password
        </h5>
      </li>
    </ul>
    <ul />
  </div>
);

SideNav.propTypes = {
  toggleCreateModal: PropTypes.func.isRequired,
};

export default SideNav;
