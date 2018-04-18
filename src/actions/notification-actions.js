import * as types from './action-types';

const generateNotification = type => {
  let notification = null;

  if (!type) {
    return notification;
  }

  switch (type) {
    case 'error':
      notification = {
        type,
        text: 'Error Error Danger!',
        buttonText: '',
        customHtml: null,
      };
      break;
    case 'warning':
      notification = {
        type,
        text: 'WARNING YOU HAVE UNSAVED CHANGES!',
        buttonText: '',
        customHtml: null,
      };
      break;
    case 'success':
      notification = {
        type,
        text: 'SUCCESS!!!1 you made it! (^_-)',
        buttonText: '',
        customHtml: null,
      }
      break;
  }
  return notification;
};

export const showNotification = type => {
  const notification = generateNotification(type);
  return {
    type: types.SHOW_NOTIFICATION,
    payload: notification,
  };
};

export const hideNotification = () => showNotification()

const validateEmail = email => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

export const submitForm = email => {
  return showNotification(validateEmail(email) ? 'success' : 'error')
};

export const changeEmailField = e => {
  const { value } = e.target;
  const notification = value ? generateNotification('warning') : null;
  return {
    type: types.CHANGE_EMAIL_FIELD,
    payload: { emailField: value, notification },
  };
};
