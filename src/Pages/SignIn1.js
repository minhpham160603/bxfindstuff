import React from "react";
import { Button, TextField } from "@mui/material";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";

// async function loginUser(credentials) {
//   return fetch("https://ancient-hamlet-39428.herokuapp.com/api/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

export default function SignIn({ setToken }) {
  let navigate = useNavigate();
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefalt();
    //login mongo
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    AuthService.login(username, password).then(
      () => {
        navigate("/", { replace: true });
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setLoading(false);
        setMessage(resMessage);
      }
    );
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Form
        style={{
          width: "30vw",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
        }}
        onSubmit={handleLogin}
        ref={form}
      >
        <h1 style={{ textAlign: "center", margin: 0 }}>Welcome Back!</h1>
        <label style={{ marginTop: "20px", marginBottom: "10px" }}>
          Username
        </label>
        <TextField
          id="username"
          variant="outlined"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></TextField>
        <label style={{ marginTop: "20px", marginBottom: "10px" }}>
          Password
        </label>
        <TextField
          id="password"
          variant="outlined"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></TextField>
        <br />
        {/* <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            type="submit"
            variant="contained"
            style={{ width: "30%", alignSelf: "right" }}
          >
            Sign In
          </Button>
        </div> */}
        <div className="form-group">
          <Button
            type="submit"
            variant="contained"
            style={{ width: "30%", alignSelf: "right" }}
          >
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Login</span>
          </Button>
        </div>
        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
}
