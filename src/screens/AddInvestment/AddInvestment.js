import React from "react";
import "./AddInvestment.css";
const AddInvestment = () => {
  return (
    <section className="main-section">
      <MainBox/>
    </section>
  );
};
const totalCostRupees="1000";
const totalCostPaise="50";
function MainBox(){
  return(
    <div className="add-investment-main-box">
      <HeadingText/>
      <TypeOfInvestmentText/>
      <InvestmentType/>
      <SpecifyYourExpenseText/>
      <SpecifyYourExpenseInput/>
      <TotalExpenseText/>
      <TotalCostStrip/>
      <SelectTimeText/>
      <AddInvestmentButton/>
    </div>
  )
};
function HeadingText(){
  return(
    <p className="main-heading">Add Investment</p>
  )
}
function TypeOfInvestmentText(){
  return(
    <p className="type-of-investment-text">Type of Investment *</p>
  )
}
function InvestmentType(){
  return(
    <form>
      <select className="Investment-type-option-div">
        <option selected className="option-text">Select the Investment Type</option>
        <option>Grocery</option>
        <option>Family</option>
        <option>Children</option>
        <option>Others</option>
        <option>Add New Type</option>
      </select>
    </form>
  )
}
function SpecifyYourExpenseText(){
  return(
    <p className="type-of-investment-text">Specify Your Expense(Optional)</p>
  )
}
function SpecifyYourExpenseInput(){
  return(
    <form>
      <input type="text" value="Specify The Expense" className="input-text"></input>
    </form>
  )
}
function TotalExpenseText(){
  return(
    <p className="type-of-investment-text">Total Cost(In Rupees)*</p>
  )
}
function PlusButton(){
  return(
    <button className="plus-button">+</button>
  )
}
function TotalCostStrip(){
  return(
    <div className="total-cost-strip">
        <PlusButton/><span className="total-rupees-blank">{totalCostRupees}     Rs</span>
        <MinusButton/><span className="second-plus-button"><PlusButton/></span>
        <span className="total-paise-blank">{totalCostPaise}     p</span>
        <MinusButton/>
    </div>
  )
}
function MinusButton(){
  return(
    <button className="minus-button">-</button>
  )
}
function AddInvestmentButton(){
  return(
    <button className="add-investment-button">Add Investment</button>
  )
}
function SelectTimeText(){
  return(
    <p className="type-of-investment-text">Select Time(Optional)</p>
  )
}
export default AddInvestment;
