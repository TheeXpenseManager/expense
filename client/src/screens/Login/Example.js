import React from "react";
import PageHeading from "../../components/Basic Components/PageHeading";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const LoginExample = () => {
  return (
    <div>
      <PageHeading heading="Login" />
      <div className="login">
        <form action="">
          <div className="image"></div>
          <TextField
            id="outlined-basic"
            label="Username or Email"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Checkbox {...label} defaultChecked />
          <Link to="/SignUp">Signup</Link>
          <Button variant="contained">Login</Button>

          <PersonIcon />
        </form>
      </div>
    </div>
  );
};

export default LoginExample;
