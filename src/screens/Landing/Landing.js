import React from "react";
import "./Landing.css";
import logo from "../../media/Logo/logo.png";
import image from "../../media/Landing/landing-image.svg";
import Button from "@mui/material/Button";

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
      <Button variant="contained" color="success">
        SignUp for Free
      </Button>
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
