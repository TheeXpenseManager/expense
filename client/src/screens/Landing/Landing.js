import React from "react";
import "./Landing.css";
import logo from "../../media/Logo/logo.png";
import image from "../../media/Landing/landing-image.svg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="SECTION">
      <Logo />
      <LandingGreenImg />
    </section>
  );
};
function Logo() {
  return (
    <section>
      <div className="LOGO">
        <img src={logo} alt=""></img>
      </div>
      <div className="headings">
        <p className="title">The eXpense Manager</p>
      </div>
      <div className="description">
        <p className="description-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sed
          commodo magna ac at amet, felis congue imperdiet.
        </p>
      </div>
      <div className="button-signup">
        <Link to="/signup">
          <Button variant="contained" color="success">
            SignUp for Free
          </Button>
        </Link>
      </div>
      <div className="already-have-an-account">
        <p>
          Already have an account...
          <Link to="/login" className="login-text">
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
}
function LandingGreenImg() {
  return (
    <div className="GreenImg">
      <img src={image} alt="" className="person-pc"></img>
    </div>
  );
}

export default Landing;
