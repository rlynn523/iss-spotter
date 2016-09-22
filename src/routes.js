import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import IssMain from './components/iss-main.js';
import CurrentLocation from './components/location.js';
import IssViewer from './components/stream.js';
import CurrentStats from'./components/stats.js';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SocialPublic from 'material-ui/svg-icons/social/public';
import Tv from 'material-ui/svg-icons/hardware/tv';
import Map from 'material-ui/svg-icons/maps/map';
import IconButton from 'material-ui/IconButton';
import ReactTooltip from 'react-tooltip'

var App = function(props) {
    return (
        <div>
            <MuiThemeProvider>
                <AppBar className='appBar' showMenuIconButton={false} title='ISS Spotter' style={{backgroundColor: '#303F9F'}}
                    iconElementRight={
                        <div>
                            <Link to={'/'} data-tip='Home'><IconButton><SocialPublic color='white' hoverColor='#9E9E9E' /></IconButton></Link>
                            <Link to={'/map'} data-tip='Map'><IconButton><Map color='white' hoverColor='#9E9E9E' /></IconButton></Link>
                            <Link to={'/stream'} data-tip='ISS Stream'><IconButton><Tv color='white' hoverColor='#9E9E9E' /></IconButton></Link>
                            <ReactTooltip place='bottom'/>
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
