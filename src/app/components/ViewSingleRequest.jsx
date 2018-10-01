import React from 'react';
import PropTypes from 'prop-types';

const ViewSingleRequest = ({
  title, description, type, status, createdat,
}) => (
  <React.Fragment>
    <h6 className="text-left">
      <strong>
        Title
      </strong>
    </h6>
    <p className="text-left">
      {title}
    </p>
    <h6 className="text-left">
      <strong>
        Type
      </strong>
    </h6>
    <p className="text-left">
      {type}
    </p>
    <h6 className="text-left">
      <strong>
        Description
      </strong>
    </h6>
    <p className="text-left">
      {description}
    </p>
    <h6 className="text-left">
      <strong>
        Date
      </strong>
    </h6>
    <p className="text-left">
      {new Date(createdat).toLocaleString('en-GB', { hour12: true })}
    </p>
    <h6 className="text-left">
      <strong>
         Status
      </strong>
    </h6>
    <p className="text-left">
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
