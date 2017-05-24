import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import rootReducer from 'rReducers/index';

import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import DevTools from './devTools';
import log from 'rMiddleware/logger.js';
import localStorageMde from 'rMiddleware/localStorageMde.js';

let applyMiddlewares = [thunk, promiseMiddleware, localStorageMde];

if (process.env.NODE_ENV == 'development') {
    applyMiddlewares.push(log);
}

const enhancer = compose(
    //你要使用的中间件，放在前面
    applyMiddleware(...applyMiddlewares),
    //必须的！启用带有monitors（监视显示）的DevTools
    DevTools.instrument()

)

export default initialState => {
    //注意：仅仅只有redux>=3.1.0支持第三个参数
    let store;

    if (process.env.NODE_ENV == 'development') {
        store = createStore(rootReducer, initialState, enhancer);
    } else {
        store = createStore(rootReducer, initialState);
    }

    //热替换选项
    if (module.hot) {
        module.hot.accept('rReducers/index', () => {
            const nextReducer = require('rReducers/index').default
            store.replaceReducer(nextReducer)
        })
    }

    return store

}