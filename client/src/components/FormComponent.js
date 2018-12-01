import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { calculate } from '../actions/index'
import { Button, Icon, TextField, Grid, Card, CardContent } from '@material-ui/core';

class FormComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            formula: '',
            rangeA: 0,
            rangeB: 0,
            alpha: 0.618,
            epsilon: 0.01
        };
    };    

    render(){
        return(           
                <Card>
                    <CardContent>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <TextField                                    
                                    id="formula"
                                    label="Formula"
                                    value={this.state.formula}                
                                    margin="dense"      
                                    fullWidth={true}                              
                                    onChange={ (e) => {
                                        this.setState({
                                            formula: e.target.value
                                        })  
                                    }}                
                                />
                             </Grid>
                             <Grid item xs={12}>
                                 <TextField
                                    id="rangeA"
                                    label="Range (A)"
                                    value={this.state.rangeA}                
                                    margin="dense"    
                                    fullWidth={true}
                                    type="number"
                                    onChange={ (e) => {
                                        this.setState({
                                            rangeA: e.target.value
                                        })  
                                    }}                
                                />
                             </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="rangeB"
                                    label="Range (B)"
                                    value={this.state.rangeB}                
                                    margin="dense"   
                                    fullWidth={true}
                                    type="number"
                                    onChange={ (e) => {
                                        this.setState({
                                            rangeB: e.target.value
                                        })  
                                    }}                
                            />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="alpha"
                                    label="alpha"
                                    value={this.state.alpha}                
                                    margin="dense"    
                                    fullWidth={true}
                                    type="number"
                                    onChange={ (e) => {
                                        this.setState({
                                            alpha: e.target.value
                                        })  
                                    }}                
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="epsilon"
                                    label="epsilon"
                                    value={this.state.epsilon}                
                                    margin="dense"    
                                    fullWidth={true}
                                    type="number"
                                    onChange={ (e) => {
                                        this.setState({
                                            epsilon: e.target.value
                                        })  
                                    }}                
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button 
                                    variant="contained" 
                                    fullWidth={true}                                    
                                    color="primary"                         
                                    onClick={() => {
                                        this.props.calculate(this.state.formula,
                                                            this.state.rangeA,
                                                            this.state.rangeB,
                                                            this.state.alpha,
                                                            this.state.epsilon
                                            )
                                    }}
                                    >
                                    Calculate                                                
                                </Button>
                            </Grid>            
                         </Grid>
                    </CardContent>
                </Card>            
        )
    }
}

const mapStateToProps = (state) => ({
    formula: state.FunctionReducer.formula
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        calculate: calculate
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);