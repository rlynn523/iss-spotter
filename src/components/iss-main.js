let React = require('react');
let CurrentLocation = require('./location.js');
let CurrentStats = require('./stats.js');
let connect = require('react-redux').connect;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const IssMain = React.createClass({
    render: function() {
        return(
            <MuiThemeProvider>
                <div className='iss'>
                    <h1>ISS Spotter!</h1>
                    <CurrentLocation />
                    <CurrentStats />
                </div>
            </MuiThemeProvider>
        )
    }
})

module.exports = IssMain;
