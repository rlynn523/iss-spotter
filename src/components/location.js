import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from '../actions/location.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from '../../node_modules/react-tap-event-plugin';
import { Gmaps, Marker } from 'react-gmaps';
injectTapEventPlugin();

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
                    // Utilizes the Paper Component from Material UI
                    <Paper className='paperMap' zDepth={2}>
                        <Gmaps className='map'
                            width={'100%'}
                            height={'100%'}
                            lat={this.props.mapLt}
                            lng={this.props.mapLng}
                            zoom={3}
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
