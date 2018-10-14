import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

/**
 * @description The User request preview component
 *
 * @param {string} title The title of the request
 * @param {string} description The description of the request
 * @param {string} type The type of the request
 * @param {string} status The status of the request
 * @param {string} createdat The created time of the request
 *
 * @returns {object}
 */
const ViewSingleRequest = ({
  title, description, type, status, createdat,
}) => (
  <React.Fragment>
    <h6 className="text-left">
      <strong>
        Title
      </strong>
    </h6>
    <p className="text-left light">
      {title}
    </p>
    <h6 className="text-left">
      <strong>
        Type
      </strong>
    </h6>
    <p className="text-left light">
      {type}
    </p>
    <h6 className="text-left">
      <strong>
        Description
      </strong>
    </h6>
    <p className="text-left light">
      {description}
    </p>
    <h6 className="text-left">
      <strong>
        Date
      </strong>
    </h6>
    <p className="text-left light">
      {moment(createdat).format('dddd, MMMM Do YYYY')}
      {' at '}
      {moment(createdat).format('hh:mm a')}
    </p>
    <h6 className="text-left">
      <strong>
         Status
      </strong>
    </h6>
    <p className="text-left light">
      {status}
    </p>
  </React.Fragment>
);

ViewSingleRequest.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  createdat: PropTypes.string.isRequired,
};

export default ViewSingleRequest;
