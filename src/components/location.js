let React = require('react');
let connect = require('react-redux').connect;
let actions = require('../actions/location.js');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from '../../node_modules/react-tap-event-plugin';
import {Gmaps, Marker} from 'react-gmaps';
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
            <MuiThemeProvider>
                <div className = 'location'>
                    <Paper className='paperMap' zDepth={2}>
                        <Gmaps className='map'
                            width={'100%'}
                            height={'100%'}
                            lat={this.props.mapLt}
                            lng={this.props.mapLng}
                            zoom={3}
                            loadingMessage={'Loading...'}
                            params={{v: '3.exp', key: 'AIzaSyBr5i2yKpltIIb5JX2n8JweakAfWuNwZyM'}}
                            onMapCreated={this.onMapCreated}>
                            <Marker
                                lat={this.props.mapLt}
                                lng={this.props.mapLng}
                                draggable={false}
                                onDragEnd={this.onDragEnd} />
                        </Gmaps>
                    </Paper>
                    <Paper zDepth={2} className='coordinatesPaper'>
                        <div className='info'>
                            <h1>Current Coordinates</h1>
                            <div className='latitude'>Latitude: {this.props.latitude}</div>
                            <div className='longitude'>Longitude: {this.props.longitude}</div>
                            <RaisedButton className='coordinateButton' label='Update ISS Position' labelColor='white' backgroundColor='#9E9E9E' onClick={this.updateCoordinates} />
                            <Link to={'/stream'}><RaisedButton className='streamButton' label='View Live Feed' labelColor='white' backgroundColor='#9E9E9E'/></Link>
                        </div>
                    </Paper>
                </div>
            </MuiThemeProvider>
        )
    }
});

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
