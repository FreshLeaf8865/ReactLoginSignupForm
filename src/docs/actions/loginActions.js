export function receiveLoginSuccessful() {
  return {
    type: 'RECEIVE_LOGIN_SUCCESSFUL',
  };
}

export function receiveSignupSuccessful() {
  return {
    type: 'RECEIVE_SIGNUP_SUCCESSFUL',
  };
}

export function login() {
  return dispatch => {
    setTimeout(() => {
      dispatch(receiveLoginSuccessful());
    }, 1000);
  };
}

export function setRedirectUrl(url) {
  return {
    type: 'SET_REDIRECT_URL',
    url,
  }
}

export function signup() {
  return dispatch => {
    setTimeout(() => {
      dispatch(receiveSignupSuccessful());
    }, 2000);
  };
}