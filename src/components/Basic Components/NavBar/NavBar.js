import React from "react";
import "./navbar.scss";
import Logo from "../../../media/Logo/logo.png";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import OutsideClickHandler from "react-outside-click-handler";
import { Button } from "@mui/material";

// Creating navbar

const NavBar = () => {
  const [menu, setMenu] = React.useState(1);

  return (
    <nav>
      <div className="nav-bar-container">
        <div className="nav-bar-logo">
          <img src={Logo} alt="logo" />
          <div className="nav-logo-name">The eXpense Manager</div>
        </div>

        <div className="window-navigation nav-bar-links">
          <NavLink
            to="/investment"
            className="nav-bar-link-items"
            activeClassName="active-link-items"
          >
            Your Investment
          </NavLink>
          <NavLink
            to="/history"
            className="nav-bar-link-items"
            activeClassName="active-link-items"
          >
            History
          </NavLink>
          <NavLink
            to="/profile"
            className="nav-bar-link-items"
            activeClassName="active-link-items"
          >
            Profile
          </NavLink>
          <Button
            variant="outlined"
            color="error"
            className="nav-bar-link-items logout-window"
          >
            Logout
          </Button>
        </div>

        <div className="mobile-navigation">
          <div className="hamburger">
            {menu === 1 ? (
              <MenuIcon onClick={() => setMenu(2)} />
            ) : (
              <CloseIcon onClick={() => setMenu(1)} />
            )}
          </div>

          <OutsideClickHandler onOutsideClick={() => setMenu(1)}>
            {menu === 2 ? (
              <div className="mobile-nav-links">
                <NavLink
                  to="/investment"
                  className="mobile-link-items"
                  activeClassName="active-link-items-mobile"
                >
                  Your Investment
                </NavLink>

                <NavLink
                  to="/history"
                  className="mobile-link-items"
                  activeClassName="active-link-items-mobile"
                >
                  History
                </NavLink>
                <NavLink
                  to="/profile"
                  className="mobile-link-items"
                  activeClassName="active-link-items-mobile"
                >
                  Profile
                </NavLink>

                <Button color="error" className=" logout-mobile">
                  Logout
                </Button>
              </div>
            ) : null}
          </OutsideClickHandler>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
