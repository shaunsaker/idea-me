import { call, put } from 'redux-saga/effects';

import Auth from '../auth/index';

export function* getUserAuth(action) {

    const getUserAuthResponse = yield call(Auth.getUserAuth, action);

    if (getUserAuthResponse) {
        yield put({
            type: 'main.SIGN_IN_USER',
            info: getUserAuthResponse
        });
    }
    else {
        const signUpUserResponse = yield call(Auth.signUpUser, action);

        if (signUpUserResponse) {
            yield put({
                type: 'main.SIGN_IN_USER',
                info: signUpUserResponse
            });
        }
        else {
            const signInUserResponse = yield call(Auth.signInUser, action);

            if (signInUserResponse) {
                yield put({
                    type: 'main.SIGN_IN_USER',
                    info: signInUserResponse
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
}