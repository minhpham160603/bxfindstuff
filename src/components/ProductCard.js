import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import Product from "../Pages/Product";
import "./productcard.css";

export default function ProductCard(product) {
  return (
    <Link
      to={`/products/${product.product.id}`}
      style={{ textDecoration: "none" }}
      className="cardlink"
    >
      <div className="card-container">
        <img
          component="img"
          height="150px"
          width="200px"
          style={{ objectFit: "cover", borderRadius: "5px 5px 0 0" }}
          src={product.product.img}
          alt="Nothing"
        />
        <div
          style={{
            padding: "10px",
            height: "50px",
            width: "180px",
            color: "black",
          }}
        >
          <h3 style={{ marginBottom: 0, marginTop: 0 }}>
            {product.product.title}
          </h3>
          <div style={{ margin: 0, padding: 0 }}>
            <h4
              style={{
                top: 0,
                marginTop: " 5px",
                marginBottom: "10px",
                color: "#59A96A",
              }}
            >
              {" "}
              € {product.product.price}{" "}
            </h4>
            <p style={{ margin: 0, textAlign: "right" }}>
              .by {product.product.user.username}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
