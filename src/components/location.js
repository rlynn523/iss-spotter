let React = require('react');
let connect = require('react-redux').connect;
let actions = require('../actions/location.js');
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from '../../node_modules/react-tap-event-plugin';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
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
    onMapCreated(map) {
        map.setOptions({
            disableDefaultUI: true
        });
    },
    render: function() {
        return(
            <div className = 'location'>
                <h3>Current Coordinates</h3>
                <div className='latitude'>{this.props.latitude}</div>
                <div className='longitude'>{this.props.longitude}</div>
                <RaisedButton className='coordinateButton' label='Update ISS Position' onClick={this.updateCoordinates} />
                <Gmaps className='map'
                    width={'600px'}
                    height={'400px'}
                    lat={this.props.mapLt}
                    lng={this.props.mapLng}
                    zoom={3}
                    loadingMessage={'Loading...'}
                    params={{v: '3.exp', key: 'AIzaSyBr5i2yKpltIIb5JX2n8JweakAfWuNwZyM'}}
                    onMapCreated={this.onMapCreated}>
                    <Marker
                        lat={this.props.mapLt}
                        lng={this.props.mapLng}
                        draggable={true}
                        onDragEnd={this.onDragEnd} />
                </Gmaps>
            </div>
        )
    }
})

let mapStateToProps = function(state, props) {
    return {
        longitude: state.LocationReducer.longitude,
        latitude: state.LocationReducer.latitude,
        mapLng: state.LocationReducer.mapLng,
        mapLt: state.LocationReducer.mapLt,
    }
}

let Container = connect(mapStateToProps)(CurrentLocation);
module.exports = Container;
// module.exports = CurrentLocation;
