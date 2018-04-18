// @flow
import React from 'react';
import { connect } from 'react-redux';
import { hideNotification } from '../actions/notification-actions';
import Box from '../fela/components/Box'
import FelaButton from '../fela/components/Button';
import { colors } from '../themes/variables'

type PropTypes = {
  notification: Object,
  hideNotification: Function,
};

const commonNotificationStyles = {
  flexDirection: 'row',
  color: colors.white,
  '> :not([role])': {
    padding: '1.5em',
    flex: 1,
  },
  '> [role="button"]': {
    display: 'flex',
    justifyContent: 'center',
    color: colors.white,
  }
}

const notificationTypeStyles = {
  warning: {
    backgroundColor: colors.yellow,
    color: colors.black,
    '> [role="button"]': {
      ...commonNotificationStyles['> [role="button"]'],
      color: colors.black,
    }
  },
  error: {
    backgroundColor: colors.amber,
  },
  success: {
    backgroundColor: colors.forest,
  },
}

const Notification = ({ notification, hideNotification }: PropTypes) => {
  const { type, text } = notification
  return (
    <Box style={{ ...commonNotificationStyles, ...notificationTypeStyles[type] }} as='section'>
      <div>{text}</div>
      <FelaButton onClick={hideNotification}>X</FelaButton>
    </Box>
  )
};

export default connect(
  ({ notification: { notification } }) => ({
    notification,
  }),
  { hideNotification },
)(Notification)
