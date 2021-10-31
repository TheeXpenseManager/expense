import React from "react";
import PageHeading from "../../components/Basic Components/PageHeading";
import Input from "../../components/Basic Components/Input";
import "./Login.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  return (
    <div className="login">
      <PageHeading heading="Login" />
      <Input icon={<PersonIcon />} placeholder="Username or Email" />
      <Input icon={<LockIcon />} placeholder="Password" />
    </div>
  );
};

export default Login;
