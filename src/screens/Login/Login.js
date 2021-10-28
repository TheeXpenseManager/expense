import React from "react";
import PageHeading from "../../components/Basic Components/PageHeading";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Login.css" ;


const Login = () => {
  return (
    <div>
      <PageHeading heading="Login" />
      <TextField className="username-email" id="outlined-basic" label="Username or email" variant="outlined" />
      <TextField className="password" id="outlined-basic" label="password" variant="outlined" />
      <Button className="login-button" variant="contained">LOGIN</Button>
    </div>
  );
};

export default Login;
