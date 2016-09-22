import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from '../actions/stats.js';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Sun from 'material-ui/svg-icons/image/brightness-5';

export class CurrentStats extends Component {
    componentDidMount() {
        if(!this.props.counter) {
            this.props.dispatch(
                actions.fetchStats(this.props.velocity, this.props.visibility)
            );
        }
    }

    render() {
        return(
            <Paper className='statsPaper' zDepth={2}>
                <div className='statsInfo'>
                    <h1>Current Stats</h1>
                    <div className='infoCounter'>Seconds Until Refresh: {this.props.counter}</div>
                    <div className='velocity'>Velocity:   {this.props.velocity} mph</div>
                    <div className='visibility'>Visibility:  {this.props.visibility}</div>
                    <Link to={'/map/'}><RaisedButton className='mapsButton' label='View Map' labelColor='white' backgroundColor='#9E9E9E' onClick={this.updateStats} /></Link>
                </div>
            </Paper>
        )
    }
}

let mapStateToProps = function(state, props) {
    return {
        velocity: state.StatsReducer.velocity,
        visibility: state.StatsReducer.visibility,
        counter: state.StatsReducer.counter
    }
}

export default connect(mapStateToProps)(CurrentStats);
