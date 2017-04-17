import { call, put } from 'redux-saga/effects';

import ApiData from '../api/index';

export function* saveData(action) {

    const response = yield call(ApiData.saveUserData, action);

    if (response) {
        if (response.success) {
            yield put({
                type: 'main.apiSuccess',
                message: 'Game saved.'
            });
        }
        else {
            yield put({
                type: 'main.apiError',
                message: response.message
            });
        }
    } 
}

export function* loadData(action) {

    const response = yield call(ApiData.loadUserData, action);

    if (response) {
        if (response.success) {
            yield put({
                type: 'main.apiLoadGame',
                data: response.message
            });
        }
        else {
            yield put({
                type: 'main.apiError',
                message: response.message
            });
        }
    } 
}