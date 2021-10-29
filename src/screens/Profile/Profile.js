import React from "react";
import "./Profile.css";
import img from "../../media/Profile/profile_icon.jpg";
import icon from "../../media/Profile/google-icon.jpg"
const Profile = () => {
  return (
    <section className="SECTION">
      <ProfileCard/>
      <ExpenseSection/>
      <p className="limit">Set Your Expense Limit</p>
    </section>
  );
};
const user={
  name:"Pratik Kumar",
  userName:"RedDevil621",
  email:"119lauda@randi.com",
  phoneNumber:"1414141414",
};
const percentage_expenses={
  fruitsAndVegs:"20%",
  billPayment:"20%",
  groceries:"20%",
  familyMembers:"20%",
  Others:"20%",
};
const total_expense="Rs 100000.00";
const date_duration="(01/01/2021 to 01/02/2021)";
const maximum_expense="Rs 5000.00";
const maximum_expense_date="(01/01/2021)";
function ProfileCard(){
  return(
    <section>
      <p className="profile-heading"><u>Profile</u></p>
    <div className="profile-card">
        <img src={img} alt="" className="profile_icon"></img>
        <p className="name">{user.name}</p>
        <p className="common-css">{user.userName}</p>
        <p className="common-css">{user.email}</p>
        <p className="common-css">{user.phoneNumber}</p>
        <EditProfile/>
    </div>
    </section>
  )
}
function ExpenseSection(){
  return(
    <div className="expense-div">
      <ConnectToGoogle/>
      <TotalExpense/>
      <AvgExpense/>
    </div>
  )
}
function EditProfile(){
  return(
    <div className="edit-profile">
      Edit Profile
    </div>
  )
}
function TotalExpense(){
  return(
   <section>
      <div className="total-expense-card">
        <div className="total-expenses">
          <p className="total-expenses-text">Total Expenses</p>
          <p className="total-expenses-text-sub1">{total_expense}</p>
          <p className="total-expenses-text-sub2">{date_duration}</p>
        </div>
        <div className="maximum-expenses">
        <p className="total-expenses-text">Maximum  Expenses</p>
          <p className="total-expenses-text-sub1">{maximum_expense}</p>
          <p className="total-expenses-text-sub2">{maximum_expense_date}</p>
        </div>
    </div>
   </section>
  )
}
function AvgExpense(){
  return(
    <section className="average-expense-card">
      <p className="percentage-of-expenses-heading">Percentage of Expenses</p>
      <div className="table-1">
        <p>Fruits and vegetables</p>
        <p>Bill Payments</p>
        <p>Groceries</p>
        <p>Family Members</p>
        <p>Others</p>
      </div>
      <div className="table-2">
        <p>{percentage_expenses.fruitsAndVegs}</p>
        <p>{percentage_expenses.billPayment}</p>
        <p>{percentage_expenses.groceries}</p>
        <p>{percentage_expenses.familyMembers}</p>
        <p>{percentage_expenses.Others}</p>
      </div>
    </section>
  )
}
function ConnectToGoogle(){
  return(
    <div className="connect-to-google">
      <img src={icon} alt="" className="google-icon"></img>
      <span className="connect-to-google-text">Connect to Google</span>
    </div>
  )
}
export default Profile;