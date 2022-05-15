import "./App.css";
import React, { Component, useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./components/Navbar";
import Product from "./Pages/Product";
import AllProducts from "./Pages/AllProducts";
import { ThemeProvider } from "@mui/styles";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import AuthService from "./services/auth.service";
import Addpost from "./Pages/Addpost";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#59A96A",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    console.log(user);
    if (user) {
      setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);
  // console.log(localStorage.getItem("user"));
  console.log(currentUser);
  //console.log(currentUser.username);
  //console.log(AuthService.getCurrentUser());
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

  const logOut = () => {
    AuthService.logout();
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar currentUser={currentUser}></Navbar>
      <Routes>
        <Route exact path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/products" element={<AllProducts></AllProducts>}></Route>
        <Route
          path="/products/:productId"
          element={<Product></Product>}
        ></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
        <Route path="/addpost" element={<Addpost></Addpost>}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
