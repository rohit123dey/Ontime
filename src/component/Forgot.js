import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography} from '@material-ui/core';


function Forgot() {
    const paperStyle={ 
        padding:20 ,
        height:'50vh',
        width:300,
        margin:"0 auto",
        backgroundColor:"lightblue",
       
    }
    
  return (
   <Grid aling='center'>
        <Paper style={paperStyle} >
          <div>
              <h1>Forgot Password</h1>
          </div>
      </Paper>
   </Grid>
  );
}

export default Forgot;
