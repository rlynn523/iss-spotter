import React from 'react';
import actions from '../actions/stats.js';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Sun from 'material-ui/svg-icons/image/brightness-5';

export const CurrentStats = React.createClass({
    componentDidMount: function() {
        this.props.dispatch(
            actions.fetchStats(this.props.velocity, this.props.visibility)
        );
    },
    updateStats: function() {
        this.props.dispatch(
            actions.fetchStats(this.props.velocity, this.props.visibility)
        );
    },
    render: function() {
        return(
            <Paper className='statsPaper' zDepth={2}>
                <div className='statsInfo'>
                    <h1>Current Stats</h1>
                    <div className='velocity'>Velocity:   {this.props.velocity} mph</div>
                    <div className='visibility'>Visibility:  {this.props.visibility}</div>
                    <RaisedButton className='statsButton' label='Update Stats' labelColor='white' backgroundColor='#9E9E9E' onClick={this.updateStats} />
                    <Link to={'/map/'}><RaisedButton className='mapsButton' label='View Map' labelColor='white' backgroundColor='#9E9E9E' onClick={this.updateStats} /></Link>
                </div>
            </Paper>
        )
    }
})

let mapStateToProps = function(state, props) {
    return {
        velocity: state.StatsReducer.velocity,
        visibility: state.StatsReducer.visibility
    }
}

export default connect(mapStateToProps)(CurrentStats);
