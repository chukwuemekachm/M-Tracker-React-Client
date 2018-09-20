import React from 'react';
import PropTypes from 'prop-types';

const RequestDetails = ({
  actions, title, type, description, status, createdat,
}) => (
  <div className="ch-row">
    <div className="ch-col-12">
      <h3 className="ch-display" dangerouslySetInnerHTML={actions} />
      <p className="ch-display">
        <label htmlFor="title" className="ch-label">
          <h4>
            Title
          </h4>
        </label>
      </p>
      <p className="ch-display">
        {title}
      </p>
      <p className="ch-display">
        <label htmlFor="type" className="ch-label">
          <h4>
            Type
          </h4>
        </label>
      </p>
      <p className="ch-display">
        {type}
      </p>
      <p className="ch-display">
        <label htmlFor="description" className="ch-label">
          <h4>
            Description
          </h4>
        </label>
      </p>
      <p className="ch-display">
        {description}
      </p>
      <p className="ch-display">
        <label htmlFor="status" className="ch-label">
          <h4>
            Status
          </h4>
        </label>
      </p>
      <p className="ch-display">
        {status}
      </p>
      <p className="ch-display">
        <label htmlFor="date" className="ch-label">
          <h4>
            Date
          </h4>
        </label>
      </p>
      <p className="ch-display">
        {new Date(createdat).toLocaleString('en-GB', { hour12: true })}
      </p>
    </div>
  </div>
);

RequestDetails.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  createdat: PropTypes.string.isRequired,
};

export default RequestDetails;
