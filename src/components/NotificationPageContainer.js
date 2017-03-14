import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as notificationActions from '../actions/notification-actions';
import Notification from './Notification';

class NotificationPageContainer extends Component {
  submitForm = e => {
    const { actions } = this.props;
    e.preventDefault();
    actions.submitForm();
  };

  render() {
    const { notification, actions, emailField } = this.props;
    const { changeEmailField } = actions;
    console.log(emailField);
    return (
      <div>
        <div className="notification-wrapper">
          {notification
            ? <Notification notification={notification} />
            : <em>Notification will appear here</em>}
        </div>
        <div className="notification-triggers">
          <input type="text" value={emailField} onChange={changeEmailField} />
          <button className="button" onClick={this.submitForm}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

NotificationPageContainer.propTypes = {
  notification: PropTypes.object,
  emailField: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    notification: state.notification.notification,
    emailField: state.notification.emailField
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
