import * as types from '../actions/action-types';

const initialState = {
  notification: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_NOTIFICATION:
      return Object.assign({}, state, { notification: action.payload });
    default:
      return state;
  }
};
