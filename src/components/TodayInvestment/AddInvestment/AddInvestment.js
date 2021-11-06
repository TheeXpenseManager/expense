import React from "react";
import "./addinvestment.scss";
import { Button } from "@mui/material";

const AddInvestment = () => {
  const AddExpense = () => {
    console.log("Add Investment");
  };

  return (
    <Button
      variant="outlined"
      color="success"
      onClick={AddExpense}
      className="add-button"
    >
      <span style={{ color: "black" }}>+&nbsp;&nbsp;Add Investment</span>
    </Button>
  );
};

export default AddInvestment;
