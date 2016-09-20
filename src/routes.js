let React = require('react');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
let IssMain = require('./components/iss-main.js');
let CurrentLocation = require('./components/location.js');
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SocialPublic from 'material-ui/svg-icons/social/public';
import IconButton from 'material-ui/IconButton';

var App = function(props) {
    return (
        <div>
            <MuiThemeProvider>
                <AppBar className='appBar' showMenuIconButton={false} title='ISS Spotter' style={{backgroundColor: '#303F9F'}}
                    iconElementRight={
                        <Link to={'/'}><IconButton><SocialPublic color='white' hoverColor='#9E9E9E'/></IconButton></Link>
                    }
                />
            </MuiThemeProvider>
            <div>
                {props.children}
            </div>
        </div>
    );
};

var mainRouter = (
    <Router history={hashHistory}>
        <Route path='/' component={IssMain} />
        <Route path='/map' component={App}>
            <IndexRoute component={CurrentLocation} />
        </Route>
    </Router>
);
module.exports = mainRouter;
