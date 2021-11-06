import React from "react";
import AddedInvestment from "./AddedInvestment";
import NoInvestments from "../../components/TodayInvestment/NoInvestments/NoInvestments";

import { investmentDetails } from "../../data/InvestmentDetails";

const YourInvestment = () => {
  return (
    <div className="investment-body">
      {investmentDetails
        .filter((date) => date.date.includes("21/10/2021"))
        .map((item) => (
          <>
            {item.investments.length === 0 ? (
              <>
                <NoInvestments />
              </>
            ) : (
              <>
                <AddedInvestment items={item} />
              </>
            )}
          </>
        ))}
    </div>
  );
};

export default YourInvestment;
