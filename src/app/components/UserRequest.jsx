import React from 'react';
import PropTypes from 'prop-types';

const UserRequest = ({
  title, createdat, status, format, onClick,
}) => (
  <ul className={format} onClick={() => onClick()}>
    <li>
      {title}
    </li>
    <li>
      {new Date(createdat).toLocaleString('en-GB', { hour12: true })}
    </li>
    <li>
      {status}
    </li>
  </ul>
);

UserRequest.propTypes = {
  title: PropTypes.string.isRequired,
  createdat: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
};

export default UserRequest;
