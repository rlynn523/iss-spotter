let React = require('react');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
let IssMain = require('./components/iss-main.js');
let CurrentLocation = require('./components/location.js');
let IssViewer = require('./components/stream.js');
let CurrentStats = require('./components/stats.js');
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SocialPublic from 'material-ui/svg-icons/social/public';
import Tv from 'material-ui/svg-icons/hardware/tv';
import Map from 'material-ui/svg-icons/maps/map';
import IconButton from 'material-ui/IconButton';

var App = function(props) {
    return (
        <div>
            <MuiThemeProvider>
                <AppBar className='appBar' showMenuIconButton={false} title='ISS Spotter' style={{backgroundColor: '#303F9F'}}
                    iconElementRight={
                        <div>
                            <Link to={'/'}><IconButton><SocialPublic color='white' hoverColor='#9E9E9E'/></IconButton></Link>
                            <Link to={'/map'}><IconButton><Map color='white' hoverColor='#9E9E9E'/></IconButton></Link>
                            <Link to={'/stream'}><IconButton><Tv color='white' hoverColor='#9E9E9E'/></IconButton></Link>
                        </div>
                }>
                </AppBar>
            </MuiThemeProvider>
            <div>
                {props.children}
            </div>
        </div>
    );
};

const StreamContainer = function() {
    return (
        <div className='stats'>
            <MuiThemeProvider>
                <IssViewer />
            </MuiThemeProvider>
            <MuiThemeProvider>
                <CurrentStats />
            </MuiThemeProvider>
        </div>
    )
}
var mainRouter = (
    <Router history={hashHistory}>
        <Route path='/' component={IssMain} />
        <Route path='/map' component={App}>
            <IndexRoute component={CurrentLocation} />
        </Route>
        <Route path='/stream' component={App}>
            <IndexRoute component={StreamContainer} />
        </Route>
    </Router>
);
module.exports = mainRouter;
