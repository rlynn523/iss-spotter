let actions = require('../actions/location.js');
//converts coordinates from Where The ISS AT API to DMS for Google Maps
let magellan = require('../../node_modules/magellan-coords')
import initialState from './initialstate';

export default function LocationReducer(state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_CURRENT_LOCATION_SUCCESS:
        var longitude = magellan(action.longitude).longitude().toDMS();
        var latitude = magellan(action.latitude).latitude().toDMS();
        var mapLng = action.longitude;
        var mapLt = action.latitude;
        let Location = Object.assign({}, state, {
            longitude: longitude,
            latitude: latitude,
            mapLng: mapLng,
            mapLt: mapLt
        });
        return Location;
    }
    return state;
}
