/**
 * Created by minsu.han on 2017. 7. 2..
 */
import { createAction, handleActions } from 'redux-actions';

// 액션 타입
export const GET_USERS = 'users/GET_USERS';
export const GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'users/GET_USERS_FAILURE';

// 액션 생성자
export const getUsers = createAction(GET_USERS);
export const getUsersSuccess = createAction(GET_USERS_SUCCESS);
export const getUsersFailure = createAction(GET_USERS_FAILURE);

// 초기 상태
const initialState = {
    data: [],
    loading: false,
    error: null
};

export default handleActions({
    [GET_USERS]: (state, action) => {
        return {
            ...state,
            loading: true
        };
    },
    [GET_USERS_SUCCESS]: (state, action) => {
        return {
            ...state,
            data: action.payload,
            loading: false,
            error: null
        };
    },
    [GET_USERS_FAILURE]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload.error
        };
    }
}, initialState);