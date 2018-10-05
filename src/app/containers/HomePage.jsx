import React from 'react';
import { Link } from 'react-router-dom';
import DefaultNavBar from '../components/NavBar';
import Icon from '../components/Icon';
import Footer from '../components/Footer';
import '../assets/css/home.css';

/**
 * @description The Home page component
 *
 * @returns {object}
 */
const HomePage = () => (
  <div>
    <DefaultNavBar />
    <div className="jumbotron">
      <div className="banner">
        <div className="w3-display-middle">
          <h3 className="text-center">
            Facilities don
            {'\''}
            t need to go bad any longer,
            {' '}
            request a repair or maintenance schedule from us today.
          </h3>
          <br />
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <Link to="/signup">
                <button type="button" className="btn btn-success btn-lg btn-block">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="col-md-3" />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <br />
      <h3 className="display-6 text-center">
        About Maintenance Tracker
      </h3>
      <br />
      <div className="container">
        <p className="text-center">
          Maintenance Tracker is an platform designed, to provide users with the oppurtunity of
          {' '}
          reaching out to operations or repairs department regarding repair or maintenance
          {' '}
          requests. It also enables users to monitor the status of their requests.
        </p>
      </div>
    </div>
    <br />
    <br />
    <div className="container">
      <h3 className="display-6 text-center">
        How it Works
      </h3>
      <br />
      <br />
      <div className="row w3-display-center">
        <Icon
          title="Authenticate"
          icon="https://res.cloudinary.com/dvcaeuvee/image/upload/v1538265100/undraw_login_jdch.svg"
        />
        <Icon
          title="Log a request"
          icon="https://res.cloudinary.com/dvcaeuvee/image/upload/v1538265099/undraw_add_file2_gvbb.svg"
        />
        <Icon
          title="Request gets approved"
          icon="https://res.cloudinary.com/dvcaeuvee/image/upload/v1538265100/undraw_hiring_cyhs.svg"
        />
        <Icon
          title="Request gets resolved"
          icon="https://res.cloudinary.com/dvcaeuvee/image/upload/v1538265100/undraw_confirmation_2uy0.svg"
        />
      </div>
    </div>
    <Footer />
  </div>
);

export default HomePage;
