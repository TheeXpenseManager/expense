import React from "react";
import InvestmentTable from "../../components/TodayInvestment/Table/InvestmentTable";
import TotalInvestment from "../../components/TodayInvestment/Total/TotalInvestment";

const AddedInvestment = ({ items }) => {
  return (
    <div>
      <InvestmentTable details={items} />
      <TotalInvestment details={items} />
    </div>
  );
};

export default AddedInvestment;
