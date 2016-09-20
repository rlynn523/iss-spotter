let React = require('react');
let ReactDOM = require('react-dom');
let Provider = require('react-redux').Provider;
let store = require('./store');
let IssMain = require('./components/iss-main.js');
let mainRouter = require('./routes.js');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

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
