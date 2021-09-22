import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';

const Login =()=>{
    const paperStyle={ 
        padding:20 ,
        height:'73vh',
        width:300,
        margin:"0 auto"
    }
    const avatarStyle={
        backgroundColor:"#150050",
    }
    const btnStyle={
        margin:"20px 0"
    }
    return(
        <Grid> 
            <Paper style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                     <h2>Sign In</h2>
                 </Grid>
                     <TextField label="Email" placeholder="Enter email" fullWidth required/>
                     <TextField label="Password" placeholder="Enter password" type="password" fullWidth required/>
                    
                        <FormControlLabel
                         control={
                            <Checkbox
                               
                                name="checkedB"
                                color="primary"
                            />
                              }
                             label="Remember me"
                         />
                     <Button tupe="submit" color="primary" variant="contained" style={btnStyle} fullWidth>Sing in</Button>
                      <Typography>
                             <Link href="#" to='/Forgot' >
                               Forgot password ?
                            </Link>
                     </Typography>  
                     <Typography>Do you have an account ?
                     <Link href="#" to='/signup' >
                        Sign Up 
                </Link>
                     </Typography>       
            </Paper>
        </Grid>
    )
}

export default Login;