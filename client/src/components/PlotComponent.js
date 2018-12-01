import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Card, CardContent } from '@material-ui/core';
import Chart from "react-google-charts";

const data = [
    ["Year", "Sales"],
    ["2004", 1000],
    ["2005", 1170],
    ["2006", 660],
    ["2007", 1030]
  ];


class PlotComponent extends Component {

    render() {
        return(
            <Card>
                <CardContent>
                    <Grid container spacing={24}>      
                        <Grid item xs={12}>
                            <b>PLOT OF {this.props.formula}</b>
                        </Grid>
                        <Grid item xs={12}>                        
                        <Chart
                            chartType="LineChart"
                            width="100%"
                            height="400px"
                            data={this.props.plotData}
                            options={{                                
                                curveType: "function",
                                legend: { position: "bottom" }
                            }}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    plotData: state.FunctionReducer.plotData,
    formula: state.FunctionReducer.formula 
})

export default connect(mapStateToProps)(PlotComponent);