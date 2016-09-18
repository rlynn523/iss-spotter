let React = require('react');
let connect = require('react-redux').connect;
let actions = require('../actions/stats.js');
import RaisedButton from 'material-ui/RaisedButton';

const CurrentStats = React.createClass({
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
            <div>
                <h3>Current Stats</h3>
                <div>Velocity:   {this.props.velocity}km/h</div>
                <div>Visibility:  {this.props.visibility}</div>
                <RaisedButton label='Update Stats' onClick={this.updateStats} />
            </div>
        )
    }
})

let mapStateToProps = function(state, props) {
    return {
        velocity: state.velocity,
        visibility: state.visibility
    }
}

let Container = connect(mapStateToProps)(CurrentStats);
module.exports = Container;
