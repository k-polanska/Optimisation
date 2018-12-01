import React, { Component } from 'react';
import {Card, CardContent, Grid} from '@material-ui/core'

class HeaderComponent extends Component {
    render() {
        return(
            <Card style={{marginTop: 20}}>
            <CardContent>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <p style={{fontFamily:'Roboto'}}><b>Authors:</b> Martyna Łagożna, Karolina Polańska</p>
                    </Grid>                    
                </Grid>
            </CardContent>
        </Card>
        )
    }
}

export default HeaderComponent;