let React = require('react');
let connect = require('react-redux').connect;
let actions = require('../actions/current-location.js');

const GoogleMap = React.createClass({
    componentDidMount: function() {
        this.props.dispatch(
            actions.fetchMap(this.props.longitude, this.props.latitude)
        );
    },
    render: function() {
        return(
            <div>
                
            </div>
        )
    }
})
