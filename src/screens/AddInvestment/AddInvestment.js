import React from "react";
import { useState } from "react";
import "./AddInvestment.css";
const AddInvestment = () => {
  return (
    <section className="main-section">
      <MainBox />
    </section>
  );
};
function MainBox() {
  return (
    <div className="add-investment-main-box">
      <HeadingText />
      <TypeOfInvestmentText />
      <InvestmentType />
      <SpecifyYourExpenseText />
      <SpecifyYourExpenseInput />
      <TotalExpenseText />
      <InputAmount />
      <AddInvestmentButton />
    </div>
  );
}
function HeadingText() {
  return <p className="main-heading">Add Investment</p>;
}
function TypeOfInvestmentText() {
  return <p className="type-of-investment-text">Type of Investment *</p>;
}
function InvestmentType() {
  return (
    <form>
      <select className="Investment-type-option-div">
        <option selected className="option-text">
          Select the Investment Type
        </option>
        <option>Grocery</option>
        <option>Family</option>
        <option>Children</option>
        <option>Others</option>
        <option>Add New Type</option>
      </select>
    </form>
  );
}
function SpecifyYourExpenseText() {
  return (
    <p className="type-of-investment-text">Specify Your Expense(Optional)</p>
  );
}
function SpecifyYourExpenseInput() {
  return (
    <form>
      <input
        type="text"
        value="Specify The Expense"
        className="input-text"
      ></input>
    </form>
  );
}
function TotalExpenseText() {
  return <p className="type-of-investment-text">Total Cost(In Rupees)*</p>;
}
function InputAmount() {
  const [rupees, setRupees] = useState(0);
  const [paise, setPaise] = useState(0);
  return (
    <section>
      <div>
        <button
          className="btn"
          onClick={() => {
            setRupees(rupees + 1);
          }}
        >
          +
        </button>
        <p className="set-rupees">{rupees} Rs</p>
        <button
          className="btn-"
          onClick={() => {
            setRupees(rupees - 1);
          }}
        >
          -
        </button>
        <button
          className="btn-paise"
          onClick={() => {
            setPaise(paise + 1);
          }}
        >
          +
        </button>
        <p className="set-paise">{paise} p</p>
        <button
          className="btn--paise"
          onClick={() => {
            setPaise(paise - 1);
          }}
        >
          -
        </button>
      </div>
    </section>
  );
}
function AddInvestmentButton() {
  const handleSubmit = () => {};
  return (
    <button className="add-investment-button" onClick={handleSubmit}>
      Add Investment
    </button>
  );
}
export default AddInvestment;
