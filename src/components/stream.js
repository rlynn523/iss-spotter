let React = require('react');
let connect = require('react-redux').connect;
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

const IssViewer = React.createClass({
    render: function() {
        return(
            <MuiThemeProvider>
                <Paper className='paperStream' zDepth={2}>
                    <iframe className='videoStream' src='http://www.ustream.tv/embed/17074538?html5ui&autoplay=true&controls=false' frameBorder='0'></iframe>
                </Paper>
            </MuiThemeProvider>
        )
    }
})
module.exports = IssViewer;
