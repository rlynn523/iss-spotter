let React = require('react');
let CurrentLocation = require('./location.js');
let CurrentStats = require('./stats.js');
let IssViewer = require('./stream.js');
let connect = require('react-redux').connect;
var router = require('react-router');
var Link = router.Link;

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SocialPublic from 'material-ui/svg-icons/social/public';

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
            <MuiThemeProvider>
                <div>
                    <Paper zDepth={2}>
                        <AppBar className='appBar' showMenuIconButton={false} title='ISS Spotter' style={{backgroundColor: '#303F9F'}} />
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
