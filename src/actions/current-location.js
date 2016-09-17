let fetch = require('isomorphic-fetch');

let DISPLAY_CURRENT_LOCATION_SUCCESS = 'DISPLAY_CURRENT_LOCATION_SUCCESS';
let displayCurrentLocationSuccess = function(longitude, latitude) {
    return {
        type: DISPLAY_CURRENT_LOCATION_SUCCESS,
        longitude: longitude,
        latitude:  latitude
    }
};

let DISPLAY_CURRENT_LOCATION_ERROR = 'DISPLAY_CURRENT_LOCATION_ERROR';
let displayCurrentLocationError = function(longitude, latitude, error) {
    return {
        type: DISPLAY_CURRENT_LOCATION_ERROR,
        longitude: longitude,
        latitude:  latitude,
        error: error
    }
};

let FETCH_CURRENT_LOCATION_SUCCESS = 'FETCH_CURRENT_LOCATION_SUCCESS';
let fetchCurrentLocationSuccess = function(longitude, latitude) {
    return {
        type: FETCH_CURRENT_LOCATION_SUCCESS,
        longitude: longitude,
        latitude: latitude
    }
}

let FETCH_CURRENT_LOCATION_ERROR = 'FETCH_CURRENT_LOCATION_ERROR';
let fetchCurrentLocationError = function(longitude, latitude, error) {
    return {
        type: FETCH_CURRENT_LOCATION_ERROR,
        longitude: longitude,
        latitude: latitude
    }
}

var fetchLocation = function(longitude, latitude) {
    return function(dispatch) {
        let url = 'https://api.wheretheiss.at/v1/satellites/25544';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText)
               error.response = response
               throw error;
           }
           return response.json();
       })
       .then(function(data) {
           let longitude = data.longitude;
           let latitude = data.latitude;
           return dispatch(
               fetchCurrentLocationSuccess(longitude, latitude)
           )
       })
       .catch(function(error) {
           return dispatch(
            console.log(error)
           )
       })
    }
}

exports.displayCurrentLocationSuccess = displayCurrentLocationSuccess;
exports.DISPLAY_CURRENT_LOCATION_SUCCESS = DISPLAY_CURRENT_LOCATION_SUCCESS;
exports.displayCurrentLocationError = displayCurrentLocationError;
exports.DISPLAY_CURRENT_LOCATION_ERROR = DISPLAY_CURRENT_LOCATION_ERROR;
exports.FETCH_CURRENT_LOCATION_SUCCESS = FETCH_CURRENT_LOCATION_SUCCESS;
exports.FETCH_CURRENT_LOCATION_ERROR = FETCH_CURRENT_LOCATION_ERROR;
exports.fetchLocation = fetchLocation
