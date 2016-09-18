let React = require('react');
let CurrentLocation = require('./location.js');
let connect = require('react-redux').connect;

var IssMain = React.createClass({
    render: function() {
        return(
            <div>
                <h1>ISS Spotter!</h1>
                <CurrentLocation />
            </div>
        )
    }
})

module.exports = IssMain;
