import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Card, CardContent } from '@material-ui/core';

class ResultComponent extends Component {
    render() {
        return(
            <Card>
                <CardContent>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <p style={{fontFamily:'Roboto'}}>Minimum: <b>{this.props.minimum}</b></p>
                        </Grid>
                        <Grid item xs={12}>
                            <p style={{fontFamily:'Roboto'}}>Number of iterations: <b>{this.props.iterNumber}</b></p>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    minimum: state.FunctionReducer.minimum,
    iterNumber: state.FunctionReducer.iterNumber
})

export default connect(mapStateToProps)(ResultComponent);