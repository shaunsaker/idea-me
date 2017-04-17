import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import { signInUser } from './auth';
import { signUpUser } from './auth';
import { signOutUser } from './auth';
import { userAuth } from './auth'
import { saveData } from './data';
import { loadData } from './data';

/**
 *  Main saga generator
 */
export function* sagas() {
    yield [
    	fork(takeLatest, 'signInUser', signInUser),
        fork(takeLatest, 'signUpUser', signUpUser),
        fork(takeLatest, 'signOutUser', signOutUser),
        fork(takeLatest, 'userAuth', userAuth),
        fork(takeLatest, 'saveData', saveData),
        fork(takeLatest, 'loadData', loadData)
    ];
}