import React from 'react';
import {Grid} from '@material-ui/core';
import FormComponent from './FormComponent';
import HeaderComponent from './HeaderComponent';
import ResultComponent from './ResultComponent';
import PlotComponent from './PlotComponent';
import AuthorsComponent from './AuthorsComponent'

const App = () => (
    <div>    
        <HeaderComponent />
        <Grid container spacing={24}>
            <Grid item xs={2}>
                <FormComponent />
            </Grid>
            <Grid item xs={10}>
                <PlotComponent />
                <ResultComponent />
                <AuthorsComponent />
            </Grid>            
        </Grid>
        
    </div>
);

export default App;