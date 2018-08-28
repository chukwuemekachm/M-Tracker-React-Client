import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Icon from '../components/Icon';
import Footer from '../components/Footer';

const HomePage = () => (
  <div>
    <NavBar />
    <div className="ch-aside">
      <div className="ch-row ch-banner">
        <div className="ch-col-6">
          <h1 className="ch-display">
            Facilities
            {' don\'t '}
            need to go bad any longer, request a repair or maintenance schedule
            {' '}
            from us today.
          </h1>
          <div className="ch-col-6">
            <center>
              <Link to="/">
                <button className="ch-btn-flat" type="button">
                  Get Started Today
                </button>
              </Link>
            </center>
          </div>
        </div>
      </div>
    </div>
    <div className="ch-row">
      <h2 className="ch-about">
        About Maintenance Tracker
      </h2>
      <p className="ch-col-10">
        Maintenance Tracker is an platform designed, to provide users with the oppurtunity
        {' '}
        of reaching out to operations or repairs department regarding repair or
        {' '}
        maintenance requests. It also enables users monitor the status of their request.
      </p>
    </div>
    <h2 className="ch-about">
      How it works
    </h2>
    <div className="ch-row">
      <Icon
        title="Authenticate"
        icon="icon ion-md-key ch-about-icon"
      />
      <Icon
        title="Log a request"
        icon="icon ion-md-settings ch-about-icon"
      />
      <Icon
        title="Request gets approved"
        icon="icon ion-md-checkbox-outline ch-about-icon"
      />
      <Icon
        title="Request gets resolved"
        icon="icon ion-md-construct ch-about-icon"
      />
    </div>
    <Footer />
  </div>
);

export default HomePage;
