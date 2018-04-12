// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { closeNotification } from '../actions/notification-actions';

type PropTypes = {
  notification: Object,
};

const Notification = ({ notification }: PropTypes) => (
  <div>Add notification code here</div>
);

export default connect(state => ({
  notification: state.notification.notification,
}))(Notification);
