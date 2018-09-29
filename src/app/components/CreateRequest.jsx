import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import loadingSvg from '../assets/svg/loading.svg';

class CreateRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: 'none',
      description: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const {
      create, history, toggleCreateModal, getRequests,
    } = this.props;
    create(this.state).then((response) => {
      if (response.code) {
        switch (response.code) {
          case 201:
            toggleCreateModal();
            getRequests();
            history.push('/dashboard');
            break;
          case 401:
            toggleCreateModal();
            history.push('/login');
            break;
          default:
            break;
        }
      }
    });
  }

  render() {
    const { title, type, description } = this.state;
    const {
      toggleCreateModal, error, loading, message,
    } = this.props;
    return (
      <div className="ch-modal">
        <div className="ch-modal-section">
          <div className="ch-col-12 ch-modal-heading">
            <h4>
              New Request
            </h4>
            <span onClick={() => toggleCreateModal()}>
              &times;
            </span>
          </div>
          <div className="ch-row">
            <div className="ch-col-10">
              <div className="ch-row">
                <div className="ch-col-12">
                  {
                    error
                      ? (
                        <Alert
                          message={message}
                          backgroundColor="#E74C3C"
                        />
                      )
                      : ''
                  }
                  {
                    loading
                      ? <img src={loadingSvg} alt="loading" />
                      : ''
                  }
                </div>
              </div>
              <form id="form-create-request" onSubmit={this.onSubmit}>
                <label htmlFor="title" className="ch-label">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="ch-input"
                  required
                  onChange={this.onChange}
                  value={title}
                />
                <label htmlFor="type" className="ch-label">
                  Type
                </label>
                <select name="type" id="type" className="ch-input" value={type} onChange={this.onChange}>
                  <option value="none">
                    -- select --
                  </option>
                  <option value="repair">
                    Repair
                  </option>
                  <option value="maintenance">
                    Maintenance
                  </option>
                </select>
                <label htmlFor="description" className="ch-label">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="ch-input ch-input-desc"
                  value={description}
                  required
                  onChange={this.onChange}
                />
                <button className="ch-btn-round" type="submit">
                  Submit Request
                </button>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


CreateRequest.propTypes = {
  toggleCreateModal: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  getRequests: PropTypes.func.isRequired,
};

export default CreateRequest;
