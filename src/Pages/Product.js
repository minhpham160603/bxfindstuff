import React from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "./AllProducts";
import Navbar from "../components/Navbar";
import { Grid, Button, div, Container, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles/";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UserCard from "../components/UserCard";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
  },
  cover: {
    borderRadius: 8,
    width: "100%",
    marginBottom: 40,
    paddingTop: "67%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  categories: {
    padding: theme.spacing(1, 1.25),
    border: "1px solid #DEE4ED",
    borderRadius: 4,
  },
  userList: {
    display: "flex",
    flexFlow: "wrap row",
  },
}));

export default function Product() {
  const params = useParams();
  const product = getProduct(params.productId);
  const theme = useTheme();
  const classes = useStyles();
  console.log(product);
  return (
    <div>
      <div className={classes.root}>
        <Container
          style={{
            paddingTop: "80px",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            maxWidth: "80vw",
          }}
        >
          {/* <div>
          <img src={product.img} alt="nothing"></img>
          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
          <p>{product.description}</p>
        </div> */}
          <Grid>
            <Grid container alignItems="center">
              <Button
                href="/products"
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                style={{
                  color: "#59A96A",
                  borderColor: "#59A96A",
                  fontFamily: " 'Circular Std', sans-serif",
                  textTransform: "initial",
                }}
              >
                Products
              </Button>
            </Grid>

            <Grid
              container
              spacing={3}
              style={{
                marginTop: "10px",
                marginBottom: "15px",
                position: "relative",
              }}
            >
              <Grid item xs={12} md={12}>
                <Grid item>
                  <div
                    style={{ backgroundImage: `url(${product.img})` }}
                    className={classes.cover}
                  ></div>
                </Grid>
                <Grid item>
                  <h1
                    style={{ marginLeft: theme.spacing(0), fontWeight: "bold" }}
                  >
                    {product.title}
                  </h1>
                  <h3 style={{ color: "#59A96A" }}>€ {product.price}</h3>
                  <div style={{ color: "#AAAAAA" }}>{product.description}</div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div style={{ marginTop: "50px" }}>
            {<UserCard user={product.user} />}
          </div>
        </Container>
      </div>
    </div>
  );
}
