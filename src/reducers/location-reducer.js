let actions = require('../actions/current-location.js');
//converts coordinates from Where The ISS AT API to DMS for Google Maps
let magellan = require('../../node_modules/magellan-coords')

let initialState = {
    latitude: 0,
    longitude: 0,
    visibility: '',
    velocity: 0
}
const LocationReducer = (state = initialState, action) => {
    // console.log(magellan(46.894511893939).latitude().toDMS());
    // console.log(magellan(95.750999628551).longitude().toDMS());
    switch(action.type) {
        case actions.FETCH_CURRENT_LOCATION_SUCCESS:
        var longitude = magellan(action.longitude).longitude().toDMS();
        var latitude = magellan(action.latitude).latitude().toDMS();
    }
    let Location = Object.assign({}, state, {
        longitude: longitude,
        latitude: latitude
    });
    return Location;
}

exports.LocationReducer = LocationReducer;
