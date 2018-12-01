import React, { Component } from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core'

class HeaderComponent extends Component {
    render() {
        return(
            <AppBar position="static" style={{marginBottom: 20}}>
                <Toolbar>
                <Typography variant="h6" color="inherit">
                    MOCIADM: Golden Section
                </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default HeaderComponent;