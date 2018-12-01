import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Card, CardContent } from '@material-ui/core';

class PlotComponent extends Component {
    render() {
        return(
            <Card>
                <CardContent>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <p>PLOT</p>
                        </Grid>                        
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    minimum: state.FunctionReducer.minimum,
    rangeA: state.FunctionReducer.rangeA,
    rangeB: state.FunctionReducer.rangeB
})

export default connect(mapStateToProps)(PlotComponent);