import { call, put } from 'redux-saga/effects';

import Auth from '../auth/index';

export function* getUserAuth() {

    const getUserAuthResponse = yield call(Auth.getUserAuth);
    console.log('getUserAuthResponse', getUserAuthResponse);

    if (getUserAuthResponse) {
        yield put({
            type: 'main.SIGN_IN_USER',
            uid: getUserAuthResponse.uid
        });
    }
    else {
        yield put({
            type: 'main.REDIRECT_USER_TO_SIGN_IN',
        });   
    }
}

export function* signInUser(action) {

    const signUpUserResponse = yield call(Auth.signUpUser, action);
    console.log('signUpUserResponse', signUpUserResponse);

    if (signUpUserResponse) {
        yield put({
            type: 'main.SIGN_IN_USER',
            uid: signUpUserResponse.uid
        });
    }
    else {
        const signInUserResponse = yield call(Auth.signInUser, action);
        console.log('signInUserResponse', signInUserResponse);

        if (signInUserResponse) {
            yield put({
                type: 'main.SIGN_IN_USER',
                uid: signInUserResponse.uid
            });
        }
        else {
            yield put({
                type: 'main.USER_ERROR',
                message: signInUserResponse // TODO: Check this
            });
        }
    }
}