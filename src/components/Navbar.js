import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import { Avatar } from "@material-ui/core";
import { useState } from "react";
import "./navbar.css";

export default function Navbar(currentUser) {
  const user = currentUser.currentUser;
  function toggleMenu() {
    const togMenu = document.querySelector(".dd_menu");
    togMenu.classList.toggle("active");
  }
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  return (
    <div className="bar-container">
      <div style={{ width: "70vw", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2
            style={{
              color: "#59A96A",
              textDecoration: "none",
              paddingLeft: "20px",
            }}
          >
            BXfindStuff
          </h2>
        </Link>
      </div>
      {user ? (
        <div style={{ width: "30vw" }}>
          <Avatar
            className="parent"
            style={{
              float: "right",
              marginTop: "15px",
              marginRight: "50px",
              cursor: "pointer",
              backgroundColor: "#59A96A",
            }}
            onClick={() => toggleMenu()}
          >
            {user.name[0].toUpperCase()}
          </Avatar>
          <div className="dd_menu">
            <ul>
              <li className="nav-item">
                <Link to={"/profile"} style={{ textDecoration: "none" }}>
                  <div style={{ color: "black" }}>Edit Profile</div>
                </Link>
              </li>
              <hr style={{ borderTop: ".5px solid #dee4ed" }}></hr>
              <li>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => AuthService.logout()}
                >
                  <span>Sign Out</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div style={{ width: "30vw" }}>
          <Link to="/signin">
            <Button
              variant="contained"
              style={{
                float: "right",
                marginRight: "100px",
                marginTop: "20px",
                width: "100px",
                backgroundColor: "#fff",
                backgroundColor: "#59A96A",
                fontFamily: " 'Circular Std', sans-serif",
                textTransform: "initial",
              }}
            >
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              variant="outlined"
              style={{
                float: "right",
                margin: "20px",
                width: "100px",
                borderColor: "#59A96A",
                color: "#59A96A",
                textTransform: "initial",
              }}
            >
              Sign Up
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
