import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, backgroundColor }) => (
  <div className="ch-alert" style={{ backgroundColor }}>
    <p>
      {message}
    </p>
  </div>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Alert;
