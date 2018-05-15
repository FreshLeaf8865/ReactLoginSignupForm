import React from 'react';
import PropTypes from 'prop-types';

class LoginWrapper extends React.Component {

  componentDidMount() {
    const { dispatch, loggedIn, setRedirectUrlAction } = this.props;

    if (!loggedIn) {
      dispatch(setRedirectUrlAction(this.props.history.location.pathname));
      this.props.history.push("/login");
    }
  }

  render() {
    if (this.props.loggedIn) {
      return this.props.children
    } else {
      return null
    }
  }
}

LoginWrapper.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  setRedirectUrlAction: PropTypes.func.isRequired,
};

export default LoginWrapper;
