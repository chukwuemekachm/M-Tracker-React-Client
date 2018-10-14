import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ firstname, lastname, email }) => (
  <div className="user-tag">
    <h6 className="text-left">
      <strong>
        <span className="badge badge-pill badge-primary">
          <i className="icon ion-md-person" />
          {' '}
          User Details
        </span>
      </strong>
    </h6>
    <h6 className="text-left">
      <strong>
        First name
      </strong>
    </h6>
    <p className="text-left light" id="firstname">
      {firstname}
    </p>
    <h6 className="text-left">
      <strong>
        Last name
      </strong>
    </h6>
    <p className="text-left light" id="lastname">
      {lastname}
    </p>
    <h6 className="text-left">
      <strong>
        Email
      </strong>
    </h6>
    <p className="text-left light" id="email">
      {email}
    </p>
  </div>
);

UserDetails.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserDetails;
