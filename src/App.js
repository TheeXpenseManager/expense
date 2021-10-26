import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import History from "./screens/History/History";
import Landing from "./screens/Landing/Landing";
import LoginExample from "./screens/Login/Example";
import Login from "./screens/Login/Login";
import Profile from "./screens/Profile/Profile";
import SignUp from "./screens/Signup/SignUp";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/History">
          <History />
        </Route>
        <Route path="/Profile">
          <Profile />
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
      </Switch>
    </Router>
  );
};

export default App;
