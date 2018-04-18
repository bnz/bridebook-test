// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeEmailField, submitForm } from '../actions/notification-actions';
import Notification from './Notification';
import { notificationWrapper } from './NotificationPageContainer.style';
import Box from '../fela/components/Box';
import Text from '../fela/components/Text';
import Button from './Button';
import Input from './input/input';

type PropTypes = {
  notification: Object,
  emailField: string,
  actions: Object,
};

const NotificationPageContainer = ({
  submitForm,
  emailField,
  notification,
  changeEmailField,
}) => {
  const submitTestForm = e => {
    e.preventDefault();
    submitForm(emailField); // I passed entered string to submit action. is it ok?
  };

  return (
    <Box>
      <Box style={notificationWrapper}>
        {notification ? (
          <Notification notification={notification} />
        ) : (
          <Text as="em">Notification will appear here</Text>
        )}
      </Box>
      <Box
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box style={{ marginRight: '8px' }}>
          <Input type="text" value={emailField} onChange={changeEmailField} />
        </Box>

        <Button theme="primary" text="Submit" onClick={submitTestForm} />
      </Box>
    </Box>
  );
};

export default connect(
  state => ({
    notification: state.notification.notification,
    emailField: state.notification.emailField,
  }),
  { changeEmailField, submitForm },
)(NotificationPageContainer);
