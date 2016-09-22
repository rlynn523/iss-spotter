import React from 'react';
let connect = require('react-redux').connect;
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import ReactTooltip from 'react-tooltip'

const IssViewer = React.createClass({
    render: function() {
        return(
            <MuiThemeProvider>
                <Paper className='paperStream' data-tip='Double Click For Fullscreen' zDepth={2}>
                    <iframe className='videoStream' src='http://www.ustream.tv/embed/17074538?html5ui&autoplay=true&controls=false&allowfullscreen=true' frameBorder='0'></iframe>
                    <ReactTooltip place='bottom' />
                </Paper>
            </MuiThemeProvider>
        )
    }
})
module.exports = IssViewer;
