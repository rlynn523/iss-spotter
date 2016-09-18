let actions = require('../actions/stats.js');

let initialState = {
    latitude: 0,
    longitude: 0,
    visibility: '',
    velocity: 0,
    map: ''
}
const StatsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.FETCH_CURRENT_STATS_SUCCESS:
        var visibility = action.visibility;
        var velocity = action.velocity
    }
    let Stats = Object.assign({}, state, {
        visibility: visibility,
        velocity: velocity
    });
    return Stats;
}

exports.StatsReducer = StatsReducer;
