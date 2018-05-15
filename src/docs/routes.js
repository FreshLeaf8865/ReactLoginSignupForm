import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom'
import Home from './home.js';
import { login, setRedirectUrl } from './actions/loginActions.js';

import { LoginWrapper, LoginForm } from '../../lib';

function mapStateToPropsLogin(state, ownProps) {
  return {
    isLoggedIn: state.login.loggedIn,
    redirectUrl: state.login.redirectUrl,
  }
}
const ConnectedLogin = withRouter(connect(mapStateToPropsLogin)(LoginForm));

function mapStateToPropsContainer(state, ownProps) {
  return {
    loggedIn: state.login.loggedIn,
  }
}
const ConnectedEnsureLoggedInContainer = withRouter(connect(mapStateToPropsContainer)(LoginWrapper));

const routes = (
	<div>
		<Route path='/login' render={() =>
			<ConnectedLogin
				backgroundImageUrl="https://i.pinimg.com/originals/1e/92/d2/1e92d2809d44371f04cbc4d3d6ce22c1.jpg"
				containerPosition="0.67"
				tryLoginAction={login}
			/>
		} />
		<ConnectedEnsureLoggedInContainer
			setRedirectUrlAction={setRedirectUrl}
		>
			<Route path='/' component={Home} />
		</ConnectedEnsureLoggedInContainer>
	</div>
);

export default routes;
