import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import store from './store';
import mainRouter from './routes.js';
let routes = (
    <Provider store={store}>
        {mainRouter}
    </Provider>
);
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        routes,
        document.getElementById('app')
    );
});
