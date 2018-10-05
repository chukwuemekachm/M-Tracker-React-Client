import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/icon.css';

/**
 * @description The Icon component
 *
 * @param {string} title The title of the icon
 * @param {object} icon The icon image/svg
 *
 * @returns {object}
 */
const Icon = ({ title, icon }) => (
  <div className="col-md-3 text-center">
    <div className="icon-container">
      <img src={icon} className="about-img" alt="authenticate" />
    </div>
    <h4>
      {title}
    </h4>
  </div>
);

Icon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Icon;
