let React = require('react');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
let IssMain = require('./components/iss-main.js');
let CurrentLocation = require('./components/location.js');

var App = function(props) {
    return (
        <div>
            <IssMain />
            <div>
                {props.children}
            </div>
        </div>
    );
};

var mainRouter = (
    <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/map' component={App}>
            <IndexRoute component={CurrentLocation} />
        </Route>
    </Router>
);
module.exports = mainRouter;
