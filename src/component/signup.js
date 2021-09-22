import {
    Avatar,
    Button,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@material-ui/core";
  

  import Radio from "@material-ui/core/Radio";
  import RadioGroup from "@material-ui/core/RadioGroup";
  import FormControlLabel from "@material-ui/core/FormControlLabel";
  import FormControl from "@material-ui/core/FormControl";
  import FormLabel from "@material-ui/core/FormLabel";
  import Checkbox from "@material-ui/core/Checkbox";
  import React from "react";
  
  const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const marginTop = { marginTop: 5 };
    const marginLeft = { marginLeft: 0 };
  
    return (
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
             
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please Fill the Form to create account
            </Typography>
          </Grid>
          <form>
            <TextField
              fullWidth
              label="Name"
              placeholder="Enter your name" 
              
            ></TextField>
            <TextField fullWidth label="Email"></TextField>
            <FormControl
              component="fieldset"
              style={marginTop}
              style={marginLeft}
            >
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                
                name="radio-buttons-group"
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel 
                 value="male" 
                 control={<Radio />} 
                 label="Male" />
              </RadioGroup>
            </FormControl>
           
            <TextField fullWidth label="Password" type="password"></TextField>
            <TextField fullWidth label="Confirm Password" type="password"></TextField>
            <FormControlLabel
              control={<Checkbox />}
              label="I accept the terms and conditions"
            />
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  };
  
  export default Signup;