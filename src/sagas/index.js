/**
 * Created by minsu.han on 2017. 7. 2..
 */
import { all } from 'redux-saga/effects';
import users from './users';

export default function* rootSaga() {
    yield all([
        users(),
    ]);
}