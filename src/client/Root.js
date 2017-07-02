/**
 * Created by minsu.han on 2017. 7. 1..
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import store from 'redux/store';
import { Provider } from 'react-redux';
import App from 'shared/App';


const Root = () => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
};

export default Root;