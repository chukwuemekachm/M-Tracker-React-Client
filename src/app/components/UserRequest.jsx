import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

/**
 * @description The User request component
 *
 * @param {string} title The title of the request
 * @param {string} createdat The created time of the request
 * @param {string} status The status of the request
 *
 * @returns {object}
 */
const UserRequest = ({
  title, createdat, status,
}) => (
  <ul className={`row bd-highlight ${status} request-card`}>
    <li className="p-3 col-sm-4 bd-highlight">
      {title}
    </li>
    <li className="p-3 col-sm-4 bd-highlight">
      {moment(createdat).fromNow()}
    </li>
    <li className="p-3 col-sm-4 bd-highlight">
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
