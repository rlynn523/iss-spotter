import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import IssMain from './components/iss-main';
import CurrentLocation from './components/location';
import IssViewer from './components/stream';
import NavBar from './components/navbar'
import CurrentStats from'./components/stats';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let App = function(props) {
    return (
        <div>
            <MuiThemeProvider>
                <NavBar />
            </MuiThemeProvider>
            <div>
                {props.children}
            </div>
        </div>
    );
};

const LandingContainer = function() {
    return (
        <div>
            <MuiThemeProvider>
                <NavBar />
            </MuiThemeProvider>
            <MuiThemeProvider>
                <IssMain />
            </MuiThemeProvider>
        </div>
    )
}
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
let mainRouter = (
    <Router history={hashHistory}>
        <Route path='/' component={LandingContainer} />
        <Route path='/map' component={App}>
            <IndexRoute component={CurrentLocation} />
        </Route>
        <Route path='/stream' component={App}>
            <IndexRoute component={StreamContainer} />
        </Route>
    </Router>
);
module.exports = mainRouter;
