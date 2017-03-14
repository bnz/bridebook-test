import * as types from '../actions/action-types';

const initialState = {
  notification: null,
  emailField: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_NOTIFICATION:
      return Object.assign({}, state, { notification: action.payload });
    case types.CHANGE_EMAIL_FIELD: {
      const { emailField, notification } = action.payload;
      return Object.assign({}, state, { emailField, notification });
    }
    default:
      return state;
  }
};
