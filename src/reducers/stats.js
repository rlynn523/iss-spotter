let actions = require('../actions/stats.js');
import initialState from './initialstate';

export default function StatsReducer (state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_CURRENT_STATS_SUCCESS:
        var visibility = action.visibility;
        var velocity = action.velocity
        let Stats = Object.assign({}, state, {
            visibility: visibility,
            velocity: velocity
        });
        return Stats;
    }
    return state;
}
