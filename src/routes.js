let React = require('react');
let ReactDOM = require('react-dom');
let router = require('react-router');
let Router = router.Router;
let Route = router.Route;
let hashHistory = router.hashHistory;
let IndexRoute = router.IndexRoute;
let Link = router.Link;
let IssViewer = require('../stream.js');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={IssViewer} />
    </Router>
);
