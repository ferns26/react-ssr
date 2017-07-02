/**
 * Created by minsu.han on 2017. 7. 2..
 */
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import * as api from 'lib/api';
import * as modules from 'modules/users';

function* fetchUsers(action) {
    try {
        const payload = yield call(api.getUsers);
        yield put({type: modules.GET_USERS_SUCCESS, payload});
        action.payload.done();
    } catch (error) {
        yield put({type: modules.GET_USERS_FAILURE, payload: error.response.data});
        action.payload.done();
    }
}

function* watchFetchUsers() {
    yield takeEvery(modules.GET_USERS, fetchUsers);
}

export default function* usersSaga() {
    yield fork(watchFetchUsers);
}
