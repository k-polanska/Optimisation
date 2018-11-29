import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { calculate } from '../actions/index'
import { Button, Icon, TextField } from '@material-ui/core';

class FormComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            formula: '',
            rangeA: 0
        };
    };    

    render(){
        return(
            <div>
                <TextField
                    id="formula"
                    label="Formula"
                    value={this.state.formula}                
                    margin="dense"                                       
                    onChange={ (e) => {
                        this.setState({
                            formula: e.target.value
                        })  
                    }}                
                />
                <TextField
                    id="rangeA"
                    label="Range (A)"
                    value={this.state.rangeA}                
                    margin="dense"    
                    type="number"
                    onChange={ (e) => {
                        this.setState({
                            rangeA: e.target.value
                        })  
                    }}                
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    // className={classes.button}>
                    // <Icon className={classes.rightIcon}
                    onClick={() => {
                        this.props.calculate(this.state.formula)
                    }}
                    >
                    Calculate
                    {/* send</Icon> */}
                    
                </Button>
            </div>
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