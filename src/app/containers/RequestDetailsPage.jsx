import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import SideNav from '../components/SideNav';
import NavBar from '../components/NavBar';
import { userError } from '../actions/commonActions';
import RequestDetails from '../components/RequestDetails';

export class RequestDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { isAuthenticated, history } = this.props;
    if (!isAuthenticated) {
      history.push('/login');
    }
  }

  /* eslint-disable class-methods-use-this */
  formatButtons(status) {
    let buttons;
    switch (status) {
      case 'approved':
        buttons = '<i class="icon ion-md-arrow-back"></i>';
        break;
      case 'disapproved':
        buttons = `<i class="icon ion-md-arrow-back"></i>
      <i class="icon ion-md-trash"></i>`;
        break;
      case 'resolved':
        buttons = `<i class="icon ion-md-arrow-back"></i>
      <i class="icon ion-md-trash"></i>`;
        break;
      default:
        buttons = `<i class="icon ion-md-arrow-back"></i>
      <i class="icon ion-md-create"></i>`;
        break;
    }
    return { __html: buttons };
  }

  render() {
    const { request } = this.props;
    return (
      <div>
        <NavBar />
        <SideNav />
        <div className="ch-row">
          <div className="ch-col-2" />
          <div className="ch-col-9" id="user-display">
            <h2 className="ch-display">
              <i className="icon ion-md-speedometer" />
              {' '}
              Dashboard
            </h2>
            <RequestDetails {...request} actions={this.formatButtons(request.status)} />
          </div>
        </div>
      </div>
    );
  }
}

RequestDetailsPage.propTypes = {
  request: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state, ownprops) => ({
  request: state.requests.currentRequest,
  isAuthenticated: state.auth.authenticated,
  history: ownprops.history,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  userErrorHandler: message => (userError(message)),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetailsPage);
