import { call, put } from 'redux-saga/effects';

import ApiData from '../api/index';

export function* saveData(action) {

    const saveResponse = yield call(ApiData.saveUserData, action);
    console.log(saveResponse);

    if (saveResponse) {
        if (saveResponse.success) {
            yield put({
                type: 'main.API_SAVE_SUCCESS',
            });
        }
        else {
            yield put({
                type: 'main.USER_ERROR',
                message: saveResponse.message // TODO: Check this
            });
        }
    } 
}

export function* loadData(action) {

    const loadResponse = yield call(ApiData.loadUserData, action);
    console.log(loadResponse);

    if (loadResponse) {
        if (loadResponse.success) {
            yield put({
                type: 'main.apiLoadGame',
                data: loadResponse.message
            });
        }
        else {
            yield put({
                type: 'main.apiError',
                message: loadResponse.message
            });
        }
    } 
}