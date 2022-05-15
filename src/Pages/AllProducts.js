import React from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { Grid, Typography } from "@mui/material";
import "../Pages/home.css";

const data = require("../dummydata.json");
const products = data.products;
export default function AllProducts() {
  return (
    <div className="main">
      <div className="block">
        <div className="title">
          <h1>All Resell Products</h1>
        </div>
        <div className="wrapper">
          {data.products.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <h3>See more</h3>
        </div>
      </div>
    </div>
  );
}

export function getProduct(number) {
  return products.find((product) => product.id === number);
}
