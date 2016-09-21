let React = require('react');
let actions = require('../actions/stats.js');
import initialState from './initialstate';
import Visibility from 'material-ui/svg-icons/action/visibility';
import NoVisibility from 'material-ui/svg-icons/action/visibility-off';

export default function StatsReducer (state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_CURRENT_STATS_SUCCESS:
        var visibility = action.visibility;
        var velocity = ((action.velocity * 0.621371).toLocaleString());
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
    }
    return state;
}
