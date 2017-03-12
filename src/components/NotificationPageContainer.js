import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as notificationActions from '../actions/notification-actions';
import Notification from './Notification';

class NotificationPageContainer extends Component {
  showErrorNotification = e => {
    const { actions } = this.props;
    e.preventDefault();
    actions.showNotification('error');
  };

  showWarningNotification = e => {
    const { actions } = this.props;
    e.preventDefault();
    //actions.showNotification('warning');
  };

  showInfoNotification = e => {
    const { actions } = this.props;
    e.preventDefault();
    //actions.showNotification('info');
  };

  showSuccessNotification = e => {
    const { actions } = this.props;
    e.preventDefault();
    //actions.showNotification('success');
  };

  showCustomNotification = e => {
    const { actions } = this.props;
    e.preventDefault();
    //actions.showNotification('custom');
  };

  render() {
    const { notification } = this.props;
    console.log(notification);
    return (
      <div>
        <div className="notification-wrapper">
          {notification
            ? <Notification notification={notification} />
            : <em>Notification will appear here</em>}
        </div>
        <div className="notification-triggers">
          <button className="button" onClick={this.showErrorNotification}>
            Error
          </button>
          <button className="button" onClick={this.showWarningNotification}>
            Warning
          </button>
          <button className="button" onClick={this.showInfoNotification}>
            Info
          </button>
          <button className="button" onClick={this.showSuccessNotification}>
            Success
          </button>
          <button className="button" onClick={this.showCustomNotification}>
            Custom
          </button>
        </div>
      </div>
    );
  }
}

NotificationPageContainer.propTypes = {
  notification: PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(
  NotificationPageContainer
);
