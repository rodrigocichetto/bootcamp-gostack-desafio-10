export const signInRequest = student => ({
  type: '@auth/SIGN_IN_REQUEST',
  payload: { student },
});

export const signInSuccess = student => ({
  type: '@auth/SIGN_IN_SUCCESS',
  payload: { student },
});

export const signFailure = () => ({
  type: '@auth/SIGN_FAILURE',
});

export const signOut = navigation => ({
  type: '@auth/SIGN_OUT',
  navigation,
});
