import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ title, icon }) => (
  <div className="ch-col-3">
    <i className={icon} />
    <h3>
      {title}
    </h3>
  </div>
);

Icon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Icon;
