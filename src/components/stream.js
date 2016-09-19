let React = require('react');
let connect = require('react-redux').connect;

const IssViewer = React.createClass({
    render: function() {
        return(
            <div className='issViewer'>
                <h3>Live Feed From The ISS!</h3>
                <iframe className='videoStream' width='480' height='270' src='http://www.ustream.tv/embed/17074538?html5ui'></iframe>
            </div>
        )
    }
})
module.exports = IssViewer;
