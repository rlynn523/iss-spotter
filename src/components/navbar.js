import React, { Component } from 'react';
import { Link } from 'react-router';
import { MuiThemeProvider, AppBar, IconButton } from 'material-ui';
import SocialPublic from 'material-ui/svg-icons/social/public';
import Tv from 'material-ui/svg-icons/hardware/tv';
import Map from 'material-ui/svg-icons/maps/map';
import ReactTooltip from 'react-tooltip'

/*
The NavBar component displays different IconButtons which are linked to different
routes. When clicked on, the components associated with those routes are rendered to
the page.
*/

export default class NavBar extends Component {
    render() {
        return(
            <MuiThemeProvider>
                <AppBar className='appBar' showMenuIconButton={false} title='ISS Spotter' style={{backgroundColor: '#3F51B5'}}
                    iconElementRight={
                        <div>
                            <Link to={'/'} data-tip='Home'><IconButton><SocialPublic color='white' hoverColor='#9E9E9E'/></IconButton></Link>
                            <Link to={'/map'} data-tip='Map'><IconButton><Map color='white' hoverColor='#9E9E9E'/></IconButton></Link>
                            <Link to={'/stream'} data-tip='ISS Stream'><IconButton><Tv color='white' hoverColor='#9E9E9E'/></IconButton></Link>
                            <ReactTooltip place='bottom' />
                        </div>
                    }>
                </AppBar>
            </MuiThemeProvider>
        )
    }
}
