import React from "react";
import './Landing.css';
import logo from '../../media/Logo/logo.png';
import GreenImg from '../../media/Landing/land.svg';
const Landing = () => {
  return (
    <section className="SECTION">
      <Logo/>
      <LandingGreenImg/>
    </section>
  );
};
function Logo(){
  return(
    <img src={logo} className="LOGO" alt=""></img>
  )
};
function LandingGreenImg(){
  return(
    <img src={GreenImg} className="GreenImg" alt=""></img>
  )
}
function Heading(){
  return(
    <div className="heading">

    </div>
  )
}
export default Landing;
