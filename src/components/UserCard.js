import React from "react";
import { Avatar } from "@mui/material";
import "./usercard.css";

export default function UserCard(user) {
  return (
    <div
      style={{
        margin: "20px",
        width: "350px",
        height: "250px",
        backgroundColor: "white",
        border: "1px solid #DEE4ED",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          width: "inherit",
          display: "flex",
        }}
      >
        <Avatar>{user.user.username[0].toUpperCase()}</Avatar>
        <div style={{ margin: "auto", marginLeft: "10px" }}>
          {user.user.username}
        </div>
      </div>
      <hr
        style={{
          margin: "20px",
          borderTop: "0.5px solid #DEE4ED",
          marginBottom: "10px",
        }}
      ></hr>
      <div
        style={{
          height: "60%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div className="item">Appt</div>
        <div className="item">Phone</div>
        <div className="item">Promotion</div>
      </div>
    </div>
  );
}
