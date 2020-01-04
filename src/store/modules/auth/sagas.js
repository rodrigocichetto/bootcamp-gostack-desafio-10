import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';
// import history from '~/services/history';

// import PATHS from '~/routes/paths';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { student: id } = payload;

    const response = yield call(api.get, `students/${id}`);

    const student = response.data;

    // api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(student));

    // history.push(PATHS.STUDENT);
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_IN_OUT', signOut),
]);
