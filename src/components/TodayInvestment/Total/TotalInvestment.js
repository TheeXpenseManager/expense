import React from "react";

const TotalInvestment = ({ details }) => {
  return (
    <div className="total-investment">
      {details.investments.reduce((acc, curr) => {
        return acc + parseFloat(curr.amount);
      }, 0)}
    </div>
  );
};

export default TotalInvestment;
