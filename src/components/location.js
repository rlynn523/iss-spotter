import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from '../actions/location';
import { MuiThemeProvider, Paper, RaisedButton } from 'material-ui';
import injectTapEventPlugin from '../../node_modules/react-tap-event-plugin';
import { Gmaps, Marker } from 'react-gmaps';
injectTapEventPlugin();

/*
This is the CurrentLocation Component, which is comprised of a Gmaps component
and a coordinatesPaper component. As soon as the CurrentLocation component
renders, the fetchLocation action is dispatched. This action fetches the
current location of the ISS from the Where The ISS At? API.
*/

/*
The Gmaps div is a npm module called react-gmaps. This module renders a Google Maps component
on the screen. Here, the lat and lng properties are set to equal the latitude
and longitude coordinates that are returned from the fetchLocation action.
The fetchLocation action is timed to fire every 10 seconds, which allows for
a live render of the Google Maps Marker on the Map.
 */

/*
The coordinatesPaper component is set to display the current longitue and latitude of
the ISS. A counter is also fired every time the fetchLocation action is, which
counts down the time until the next update.
*/

export class CurrentLocation extends Component {
    componentDidMount() {
        if(!this.props.counter) {
            this.props.dispatch(
                actions.fetchLocation(this.props.longitude, this.props.latitude)
            );
        }
    }
    onMapCreated(map) {
        map.setOptions({
            disableDefaultUI: true
        });
    }
    render() {
        return(
            <MuiThemeProvider className='locationStyle'>
                <div className='location'>
                    <Paper className='paperMap' zDepth={2}>
                        <Gmaps className='map'
                            width={'100%'}
                            height={'100%'}
                            lat={this.props.mapLt}
                            lng={this.props.mapLng}
                            zoom={3}
                            scrollwheel={false}
                            draggable={false}
                            loadingMessage={'Loading Map...'}
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
                            <div className='infoCounter'>Seconds Until Refresh: {this.props.counter}</div>
                            <div className='latitude'>Latitude: {this.props.latitude}</div>
                            <div className='longitude'>Longitude: {this.props.longitude}</div>
                            <Link to={'/stream'}><RaisedButton className='streamButton' label='View Live Feed' labelColor='white' backgroundColor='#9E9E9E'/></Link>
                        </div>
                    </Paper>
                </div>
            </MuiThemeProvider>
        )
    }
};

let mapStateToProps = function(state, props) {
    return {
        longitude: state.LocationReducer.longitude,
        latitude: state.LocationReducer.latitude,
        mapLng: state.LocationReducer.mapLng,
        mapLt: state.LocationReducer.mapLt,
        counter: state.LocationReducer.counter
    }
}

export default connect(mapStateToProps)(CurrentLocation);
