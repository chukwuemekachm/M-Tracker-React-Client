import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    let { size } = this.state;
    size = size === 'none' ? 'block' : 'none';
    this.setState({ size });
  }

  render() {
    const { size } = this.state;
    return (
      <nav>
        <ul className="ch-nav ch-card">
          <li>
            <h2>
              <a href="/">
                <i className="icon ion-md-construct" />
                {' '}
                Maintenance Tracker
              </a>
              <i className="icon ion-md-menu" id="menu" onClick={this.toggleMenu} />
            </h2>
          </li>
          <div className="ch-nav-right" id="nav" style={{ display: size }}>
            <li>
              <a href="/">
                Login
              </a>
            </li>
          </div>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
