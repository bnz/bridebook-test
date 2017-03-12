import * as types from './action-types';

const generateNotification = type => {
  let notification = null;
  switch (type) {
    case 'error':
      notification = {
        type,
        text: 'Error Error Danger!',
        buttonText: '',
        customHtml: null
      };
      break;
  }
  /* TO IMPLEMENT OTHER CASES */
  return notification;
};

export const showNotification = type => {
  const notification = generateNotification(type);
  return {
    type: types.SHOW_NOTIFICATION,
    payload: notification
  };
};

export const hideNotification = type => {
  /* TO IMPLEMENT */
};
