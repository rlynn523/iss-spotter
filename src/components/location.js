let React = require('react');
let connect = require('react-redux').connect;
let actions = require('../actions/current-location.js');

const CurrentLocation = React.createClass({
    componentDidMount: function() {
        this.props.dispatch(
            actions.fetchLocation(this.props.longitude, this.props.latitude)
        );
    },
    updateCoordinates: function() {
        this.props.dispatch(
            actions.fetchLocation(this.props.longitude, this.props.latitude)
        );
    },
    render: function() {
        return(
            <div>
                <h3>Current Coordinates</h3>
                <div>{this.props.longitude}</div>
                <div>{this.props.latitude}</div>
                <button type='button' onClick={this.updateCoordinates}>Update Coordinates</button>
            </div>
        )
    }
})

let mapStateToProps = function(state, props) {
    return {
        longitude: state.longitude,
        latitude: state.latitude
    }
}

let Container = connect(mapStateToProps)(CurrentLocation);
module.exports = Container;
