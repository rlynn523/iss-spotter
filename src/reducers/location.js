import actions from '../actions/location.js';
import magellan from '../../node_modules/magellan-coords';
import initialState from './initialstate';

export default function LocationReducer(state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_CURRENT_LOCATION_SUCCESS:
        // Converts coordinates from Where The ISS AT API to DMS for Google Maps
        var longitude = magellan(action.longitude).longitude().toDMS();
        var latitude = magellan(action.latitude).latitude().toDMS();
        // mapLng and mapLt variables are set to the values fetched from the API
        var mapLng = action.longitude;
        var mapLt = action.latitude;
        let Location = Object.assign({}, state, {
            longitude: longitude,
            latitude: latitude,
            mapLng: mapLng,
            mapLt: mapLt
        });
        return Location;
        break;
        case actions.MAP_COUNTER:
        let counter = action.counter;
        let Counter = Object.assign({}, state, {
            counter: counter
        });
        return Counter;
    }
    return state;
}
