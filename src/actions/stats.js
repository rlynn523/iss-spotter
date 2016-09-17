let fetch = require('isomorphic-fetch');

let DISPLAY_STATS_SUCCESS = 'DISPLAY_STATS_SUCCESS';
let displayStatsSuccess = function(velocity, visibility) {
    return {
        velocity: velocity,
        visibility: visibility
    }
};

let DISPLAY_STATS_ERROR = 'DISPLAY_STATS_ERROR';
let displayStatsError = function(velocity, visibility, error) {
    return {
        velocity: velocity,
        visibility: visibility,
        error: error
    }
};
exports.displayStatsSuccess = displayStatsSuccess;
exports.DISPLAY_STATS_SUCCESS = DISPLAY_STATS_SUCCESS;
exports.displayStatsError = displayStatsError;
exports.DISPLAY_STATS_ERROR = DISPLAY_STATS_ERROR;
