import React from 'react';
import NavBar from '../components/NavBar';

const NotFound = () => (
  <div className="ch-aside">
    <NavBar />
    <div
      className="ch-row"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', width: '100%', minHeight: '100%', position: 'fixed',
      }}
    >
      <div className="ch-col-6">
        <h1 style={{ fontSize: '8em' }}>
          404
        </h1>
        <p>
          Oops, the page you are looking for was not found.
        </p>
      </div>
    </div>
  </div>
);

export default NotFound;
