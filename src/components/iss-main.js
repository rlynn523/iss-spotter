import React from 'react';
import CurrentLocation from './location.js';
import CurrentStats from './stats.js';
import IssViewer from './stream.js';
let connect = require('react-redux').connect;
var router = require('react-router');
var Link = router.Link;

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SocialPublic from 'material-ui/svg-icons/social/public';
import Tv from 'material-ui/svg-icons/hardware/tv';
import Map from 'material-ui/svg-icons/maps/map';
import ReactTooltip from 'react-tooltip'

const style = {
    largeIcon: {
        width: 60,
        height: 60,
    },
    color: 'white',
    hoverColor: '#9E9E9E',
    large: {
        width: 120,
        height: 120,
        padding: 30,
  },
};

const IssMain = React.createClass({
    render: function() {
        return(
            <MuiThemeProvider className='issStyle'>
                <div className='iss'>
                    <Paper zDepth={2}>
                        <AppBar className='appBar' showMenuIconButton={false} title='ISS Spotter' style={{backgroundColor: '#303F9F'}}
                            iconElementRight={
                                <div>
                                    <Link to={'/'} data-tip='Home'><IconButton><SocialPublic color='white' hoverColor='#9E9E9E'/></IconButton></Link>
                                    <Link to={'/map'} data-tip='Map'><IconButton><Map color='white' hoverColor='#9E9E9E'/></IconButton></Link>
                                    <Link to={'/stream'} data-tip='ISS Stream'><IconButton><Tv color='white' hoverColor='#9E9E9E'/></IconButton></Link>
                                    <ReactTooltip place='bottom' />
                                </div>
                            }>
                        </AppBar>
                        <div className='mainDiv'>
                            <p className='title' style={{fontWeight: 'lighter'}}>Where above Earth is the ISS?</p>
                            <Link to={'/map/'}><IconButton iconStyle={style.largeIcon} style={style.large}>
                                <SocialPublic className='launchButton' color={style.color} hoverColor={style.hoverColor} />
                            </IconButton></Link>
                        <p className='launchApp' style={{fontWeight: 'lighter'}}>Launch Map</p>
                        </div>
                    </Paper>
                </div>
            </MuiThemeProvider>
        )
    }
})

module.exports = IssMain;
