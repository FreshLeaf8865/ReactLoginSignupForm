import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';
import HomePage from './home.js';
import { login, setRedirectUrl } from './actions/loginActions.js';
import { LoginWrapper, LoginForm } from '../../lib';
// import CustomInput from './customInput.js';

function mapStateToPropsLoginForm(state) {
  return {
    isLoggedIn: state.login.isLoggedIn,
    redirectUrl: state.login.redirectUrl,
  }
}
const ConnectedLoginForm = withRouter(connect(mapStateToPropsLoginForm)(LoginForm));

function mapStateToPropsLoginWrapper(state) {
  return {
    isLoggedIn: state.login.isLoggedIn,
  }
}
const ConnectedLoginWrapper = withRouter(connect(mapStateToPropsLoginWrapper)(LoginWrapper));

const materialButton = <FlatButton hoverColor="#2E86C1" label="LOGIN" />

const routes = (
  <div>
    <Route path='/login' render={() =>
      <ConnectedLoginForm
        backgroundImageUrl="https://i.pinimg.com/originals/1e/92/d2/1e92d2809d44371f04cbc4d3d6ce22c1.jpg"
        buttonElement={materialButton}
        containerPosition="0.67"
        // inputElement={<CustomInput />}
        tryLoginAction={login}
      />
    } />
    <ConnectedLoginWrapper
      setRedirectUrlAction={setRedirectUrl}
    >
      <Route path='/' component={HomePage} />
    </ConnectedLoginWrapper>
  </div>
);

export default routes;
