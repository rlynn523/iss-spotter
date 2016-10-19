import React, { Component } from 'react';
import { Link } from 'react-router';
import CurrentLocation from './location';
import CurrentStats from './stats';
import IssViewer from './stream';
import { MuiThemeProvider, IconButton } from 'material-ui';
import Tv from 'material-ui/svg-icons/hardware/tv';
import Map from 'material-ui/svg-icons/maps/map';
import ReactTooltip from 'react-tooltip'

// Styling for IconButtons

const style = {
    largeIcon: {
        width: 60,
        height: 60,
    },
    hoverColor: '#3F51B5',
    large: {
        width: 120,
        height: 120,
        padding: 30,
  },
};

/*
This is the Landing Page. Here, a title is displayed, as well as two IconButton.
The Map Icon is linked to the '/map' route, which when clicked, renders the
components associated with that route to the page. The same is true for the
The TV Icon, which is linked to the '/stream' route
*/

export default class IssMain extends Component {
    render() {
        return(
            <MuiThemeProvider className='issStyle'>
                <div className='mainDiv'>
                    <p className='title' style={{fontWeight: 'lighter'}}>Where above Earth</p>
                    <p className='titleTwo' style={{fontWeight: 'lighter'}}>is the International Space Station?</p>
                    <div className='launch'>
                        <div className='launchMap'>
                            <Link to={'/map'}><IconButton iconStyle={style.largeIcon} style={style.large}>
                                <Map className='launchButton' hoverColor={style.hoverColor} />
                            </IconButton></Link>
                            <p className='launchApp' style={{fontWeight: 'lighter'}}>Launch Map</p>
                        </div>
                        <div className='launchStream'>
                            <Link to={'/stream'}><IconButton iconStyle={style.largeIcon} style={style.large}>
                                <Tv className='launchButton' hoverColor={style.hoverColor} />
                            </IconButton></Link>
                            <p className='launchApp' style={{fontWeight: 'lighter'}}>Launch Live Feed</p>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}
