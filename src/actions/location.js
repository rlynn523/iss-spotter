import fetch from 'isomorphic-fetch';

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
        latitude: latitude,
        error: error
    }
}

let SHOW_COUNTER = 'SHOW_COUNTER';
let showCounter = function(counter) {
    return {
        type: SHOW_COUNTER,
        counter: counter
    }
}
let fetchLocation = function(longitude, latitude) {
    return function(dispatch) {
        var exec = function() {
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
               let i = 10;
               setInterval(function() {
                   if(i === 0) {
                       return
                   } else {
                       i=i-1;
                       dispatch(
                          showCounter(i)
                       )
                   }
               }, 1000);
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
        exec();
        setInterval(function() {
            exec();
        }, 10000);
    }
}

exports.FETCH_CURRENT_LOCATION_SUCCESS = FETCH_CURRENT_LOCATION_SUCCESS;
exports.FETCH_CURRENT_LOCATION_ERROR = FETCH_CURRENT_LOCATION_ERROR;
exports.fetchLocation = fetchLocation;
exports.SHOW_COUNTER = SHOW_COUNTER;
exports.showCounter = showCounter
