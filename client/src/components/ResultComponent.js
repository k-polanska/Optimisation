import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Card, CardContent } from '@material-ui/core';

class ResultComponent extends Component {
    render() {
        return(
            <Card style={{marginTop: 20}}>
                <CardContent>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <p style={{fontFamily:'Roboto'}}><b>Minimum:</b> {this.props.minimum}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <p style={{fontFamily:'Roboto'}}><b>Number of iterations:</b> {this.props.iterNumber}</p>
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