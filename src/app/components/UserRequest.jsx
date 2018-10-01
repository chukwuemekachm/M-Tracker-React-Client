import React from 'react';
import PropTypes from 'prop-types';

const UserRequest = ({
  title, createdat, status,
}) => (
  <ul className={`d-md-flex bd-highlight ${status} request-card`}>
    <li className="p-3 flex-fill bd-highlight">
      {title}
    </li>
    <li className="p-3 flex-fill bd-highlight">
      {new Date(createdat).toLocaleString('en-GB', { hour12: true })}
    </li>
    <li className="p-3 flex-fill bd-highlight">
      {status}
    </li>
  </ul>
);

UserRequest.propTypes = {
  title: PropTypes.string.isRequired,
  createdat: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default UserRequest;
