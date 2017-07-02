/**
 * Created by minsu.han on 2017. 7. 2..
 */
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import modules from '../modules';
import rootSaga from '../sagas';

const isDevelopment = process.env.NODE_ENV === 'development'; // 환경이 개발모드인지 확인합니다

// 개발모드에서만 리덕스 개발자도구 적용
const composeEnhancers = isDevelopment ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState) => {
    const middlewares = [
        sagaMiddleware
        //, logger
    ];

    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    const store = createStore(
        modules, initialState, composeEnhancers(...enhancers)
    );

    sagaMiddleware.run(rootSaga);

    // const store = createStore(modules, initialState, composeEnhancers(
    //     applyMiddleware(penderMiddleware())
    // ));

    // hot-reloading 를 위한 코드
    if(module.hot) {
        module.hot.accept('../modules', () => {
            const nextRootReducer = require('../modules').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

export default configureStore;