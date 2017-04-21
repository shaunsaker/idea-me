import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import { getUserAuth } from './auth'
import { saveData } from './data';
import { loadData } from './data';

export function* sagas() {
    yield [
        fork(takeLatest, 'getUserAuth', getUserAuth),
        fork(takeLatest, 'saveData', saveData),
        fork(takeLatest, 'loadData', loadData)
    ];
}