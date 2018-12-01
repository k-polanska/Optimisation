import React from 'react';
import {Grid} from '@material-ui/core';
import FormComponent from './FormComponent';
import HeaderComponent from './HeaderComponent';
import ResultComponent from './ResultComponent';
import PlotComponent from './PlotComponent';

const App = () => (
    <div>    
        <HeaderComponent />
        <Grid container spacing={24}>
            <Grid item xs={4}>
                <FormComponent />
            </Grid>
            <Grid item xs={8}>
                <PlotComponent />
                <ResultComponent />
            </Grid>            
        </Grid>
        
    </div>
);

export default App;