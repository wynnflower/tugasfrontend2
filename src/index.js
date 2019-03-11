import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import GlobalState from './2. reducers' // buat diakses ke State
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const variabelGlobal=createStore(GlobalState) // buat nyimpen Global State buat diakses ke component2, contoh: ke Homepage
ReactDOM.render(<Provider store={variabelGlobal}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
