import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import cookie from "cookie";

const NavBar = (props) => {
  const navigate = useNavigate();
  
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Small Businesses
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Business List</Link>
          </li>

          {props.user.username && (

          <li className="nav-list-item">
            <Link to="/addBusiness">Add Business</Link>
          </li>
          )}
          <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              navigate("/login");
            }}
          >
            Login
          </li>        
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

