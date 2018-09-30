import React from 'react';
import loadingSvg from '../assets/svg/loading.svg';
import '../assets/css/loader.css';

const Loader = () => (
  <div className="loader-container">
    <div className="loader">
      <img src={loadingSvg} alt="loader" />
    </div>
  </div>
);

export default Loader;
