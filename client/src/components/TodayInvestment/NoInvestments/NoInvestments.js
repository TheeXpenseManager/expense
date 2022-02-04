import React from "react";
import "./noInvestment.scss";
import Heading from "../../Basic Components/Heading/Heading";
import NothingAdded from "../../../media/Nothing/nothing.svg";
import AddInvestment from "../AddInvestment/AddInvestment";

const NoInvestments = () => {
  return (
    <div className="no-investments">
      <div className="nothing-heading">
        <Heading heading="Today's Investment" />
      </div>
      <div className="nothing-image">
        <img src={NothingAdded} alt="No Investment Added" />
        <div className="image-description">No Investments added yet</div>
      </div>
      <div className="nothing-add-button">
        <AddInvestment />
      </div>
    </div>
  );
};
export default NoInvestments;
