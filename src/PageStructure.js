import React from "react";
import Footer from "./components/Basic Components/Footer/Footer";
import NavBar from "./components/Basic Components/NavBar/NavBar";

const PageStructure = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default PageStructure;
