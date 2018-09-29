import types from '../actions/commonTypes';

const initialState = {
  showCreateModal: false,
  showUpdateModal: false,
  loading: false,
  error: false,
  message: '',
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_ERROR:
      return Object.assign(
        {},
        { ...state },
        {
          loading: false,
          error: true,
          message: action.payload,
        },
      );
    case types.NETWORK_ERROR:
      return Object.assign(
        {},
        { ...state },
        {
          loading: false,
          error: true,
          message: 'Oops! we are having an issue connecting to our servers. Please try again later, this issue has been logged with our Engineers.',
        },
      );
    case types.LOADING:
      return Object.assign(
        {},
        { ...state },
        {
          loading: true,
          error: false,
          message: '',
        },
      );
    case types.COMPLETE:
      return Object.assign(
        {},
        { ...state },
        {
          loading: false,
          error: false,
          message: '',
        },
      );
    case types.TOGGLE_CREATE_MODAL:
      return {
        ...state,
        showCreateModal: state.showCreateModal !== true ? true : false,
      };
    default:
      return state;
  }
};

export default commonReducer;
