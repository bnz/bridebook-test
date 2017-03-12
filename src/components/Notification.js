import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as notificationActions from '../actions/notification-actions';

class Notification extends Component {
  render() {
    const { notification } = this.props;

    return (
      <div>
        Add notification code here
      </div>
    );
  }
}

Notification.propTypes = {
  notification: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    notification: state.notification.notification
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(notificationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
