import React from "react";
import "./index.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import History from "./screens/History/History";
import Landing from "./screens/Landing/Landing";
import LoginExample from "./screens/Login/Example";
import Login from "./screens/Login/Login";
import Profile from "./screens/Profile/Profile";
import SignUp from "./screens/Signup/SignUp";
import YourInvestment from "./screens/YourInvestment/YourInvestment";
import PageStructure from "./PageStructure";
import AddInvestment from "./screens/AddInvestment/AddInvestment";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact>
          <PageStructure children={<YourInvestment />} />
        </Route>
        <Route path="/Landing" exact>
          <Landing />
        </Route>
        <Route path="/History">
          <PageStructure children={<History />} />
        </Route>
        <Route path="/Profile">
          <PageStructure children={<Profile />} />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/LoginExample">
          <LoginExample />
        </Route>
        <Route path="/add">
          <AddInvestment />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
