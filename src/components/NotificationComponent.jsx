import React from "react";
import { connect } from "react-redux";

import Notifications from "react-notification-system-redux";

class NotificationSystem extends React.Component {
  render() {
    const { notifications } = this.props;

    const style = {
      NotificationItem: {
        DefaultStyle: {
          margin: "10px 5px 2px 1px"
        },
        success: {
          color: "red"
        }
      }
    };

    return <Notifications notifications={notifications} style={style} />;
  }
}

const mapStateToProps = state => ({ notifications: state.notifications });

const mapFunctionToProps = () => ({});

export default connect(
  mapStateToProps,
  mapFunctionToProps
)(NotificationSystem);
