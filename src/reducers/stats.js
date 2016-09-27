import React from 'react';
import actions from '../actions/stats.js';
import initialState from './initialstate';
import Visibility from 'material-ui/svg-icons/action/visibility';
import NoVisibility from 'material-ui/svg-icons/action/visibility-off';

export default function StatsReducer (state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_CURRENT_STATS_SUCCESS:
        // visibility variable is set to the value fetched from the fetchStats action
        var visibility = action.visibility;
        // the velocity fetched from the API is converted to MPH and a string via toLocaleString()
        var velocity = ((action.velocity * 0.621371).toLocaleString());
        /* Instead of displaying the two visibility options from the API (either 'daylight' or 'eclipsed'),
            this will display either an eye icon to represent that visiblity is 'daylight', or an eye with a
            slash to denote that visiblity is 'eclipsed' */
        if(action.visibility === 'daylight') {
            visibility = <Visibility className='visibility-icon' style={{width: 64, height: 64}}/>
        } else {
            visibility = <NoVisibility className='noVisibility-icon' style={{width: 64, height: 64}}/>
        }
        let Stats = Object.assign({}, state, {
            visibility: visibility,
            velocity: velocity
        });
        return Stats;
        break;
        case actions.STATS_COUNTER:
        let counter = action.counter;
        let Counter = Object.assign({}, state, {
            counter: counter
        });
        return Counter;
    }
    return state;
}
