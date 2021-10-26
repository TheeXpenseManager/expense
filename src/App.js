import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import History from "./screens/History/History";
import Landing from "./screens/Landing/Landing";
import Login from "./screens/Login/Login";
import Profile from "./screens/Profile/Profile";
import SignUp from "./screens/Signup/SignUp";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/home" exact>
          <Landing />
        </Route>
        <Route path="/History" exact>
          <History />
        </Route>
        <Route path="/Profile" exact>
          <Profile />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
        <Route path="/SignUp" exact>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
