import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/createRequestForm.css';

const DeleteRequest = ({ handleClick }) => (
  <div
    className="modal fade"
    id="deleteRequest"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="deleteRequest"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header p-2 w3-flat-midnight-blue">
          <h5 className="modal-title" id="exampleModalCenterTitle">
            Delete Request?
          </h5>
          <button
            type="button"
            id="closeDeleteModal"
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
          <div>
            <p>
              This action can not be undone, are you sure you want to delete this request?
            </p>
            <button
              type="button"
              id="closeDeleteModal"
              className="btn btn-danger"
              data-dismiss="modal"
              aria-label="Close"
            >
              Cancel
            </button>
            <button
              type="button"
              id="closeDeleteModalTrue"
              className="btn btn-success ml-4"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleClick}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

DeleteRequest.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default DeleteRequest;
