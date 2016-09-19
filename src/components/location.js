let React = require('react');
let connect = require('react-redux').connect;
let actions = require('../actions/location.js');
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from '../../node_modules/react-tap-event-plugin';
injectTapEventPlugin();

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
                <RaisedButton label='Update Coordinates' onClick={this.updateCoordinates} />
            </div>
        )
    }
})

let mapStateToProps = function(state, props) {
    return {
        longitude: state.LocationReducer.longitude,
        latitude: state.LocationReducer.latitude
    }
}

let Container = connect(mapStateToProps)(CurrentLocation);
module.exports = Container;
