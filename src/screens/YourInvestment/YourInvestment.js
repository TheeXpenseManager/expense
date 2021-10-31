import React from "react";
import Footer from "../../components/Basic Components/Footer/Footer";
import NavBar from "../../components/Basic Components/NavBar/NavBar";
import InvestmentTable from "../../components/TodayInvestment/Table/InvestmentTable";

const YourInvestment = () => {
  return (
    <div>
      <NavBar />
      <h1>Investment</h1>
      <InvestmentTable />
      <Footer />
    </div>
  );
};

export default YourInvestment;
