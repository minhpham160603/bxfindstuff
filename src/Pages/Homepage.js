import React from "react";
import "./home.css";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Homepage() {
  const data = require("../dummydata.json");

  return (
    <div className="home">
      <div className="main">
        <div className="block">
          <div className="title">
            <h1>BX Legacy</h1>
          </div>
          <div className="wrapper">
            {data.products.slice(0, 8).map((product) => (
              <ProductCard product={product} key={product.id}></ProductCard>
            ))}
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <h3 style={{ color: "var(--green)" }}>See more</h3>
            </Link>
          </div>
        </div>
        <div className="block">
          <div className="title">
            <h1>BX Sharing</h1>
          </div>
          <div className="wrapper">
            {data.services.slice(0, 8).map((service) => (
              <ProductCard product={service}></ProductCard>
            ))}
          </div>
        </div>
        <p>Hello World</p>
      </div>
    </div>
  );
}
