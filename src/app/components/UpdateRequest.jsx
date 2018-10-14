import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/createRequestForm.css';

/**
 * @description Update request form modal component
 *
 * @class
 *
 * @extends React.Component
 */
class UpdateRequestForm extends Component {
  /**
   * @constructor
   * @param {object} props The injected props
   */
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: '',
      description: '',
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @description Handles the input change events
   * Updates the state value of the input field
   * @function
   * @param {object} event The event object
   */
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  /**
   * @description Handles the form submit event
   * Executes the create method to submit the form
   * Handle the result of the response
   * @function
   * @param {object} event The event object
   */
  handleSubmit(event) {
    event.preventDefault();
    const { update, history, request } = this.props;
    this.setState({
      loading: true,
    });
    update({ ...this.state, id: request.id }).then((response) => {
      if (response) {
        switch (response.code) {
          case 200:
            document.getElementById('closeUpdateModal').click();
            this.setState({
              title: '',
              type: '',
              description: '',
              loading: false,
            });
            break;
          case 401:
            history.push('/login');
            break;
          default:
            this.setState({
              loading: false,
            });
            break;
        }
      }
    });
  }

  /**
   * @description Renders the component on a dom node
   * @function
   * @returns {object} The components to render
   */
  render() {
    const {
      title, type, description, loading,
    } = this.state;
    const { request } = this.props;
    return (
      <div
        className="modal fade"
        id="updateRequest"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="updateRequest"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header p-2 w3-flat-midnight-blue">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Update request
              </h5>
              <button
                type="button"
                id="closeUpdateModal"
                className="close p-4"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    className="form-control text"
                    placeholder="Title"
                    name="title"
                    onChange={this.handleChange}
                    value={title || request.title}
                    required
                  />
                </div>
                <br />
                <div className="input-group mb-4">
                  <select
                    name="type"
                    className="form-control text"
                    onChange={this.handleChange}
                    required
                    value={type || request.type}
                  >
                    <option value="">
                      Type
                    </option>
                    <option value="repair">
                      Repair
                    </option>
                    <option value="maintenance">
                      Maintenance
                    </option>
                  </select>
                </div>
                <br />
                <div className="input-group mb-4">
                  <textarea
                    name="description"
                    className="form-control text"
                    placeholder="Description"
                    onChange={this.handleChange}
                    value={description || request.description}
                    required
                  />
                </div>
                <div className="p-4">
                  <button type="submit" className="btn btn-success btn-md btn-block">
                    {
                      loading
                        ? (
                          <React.Fragment>
                            <i className="fa fa-refresh fa-spin" />
                            {' '}
                            Processing request
                          </React.Fragment>
                        )
                        : 'Update Request'
                    }
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateRequestForm.propTypes = {
  update: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  request: PropTypes.shape({}).isRequired,
};


export default UpdateRequestForm;
