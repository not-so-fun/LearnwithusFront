import React from "react";
import "../../css/admin.products.css";
import Product from "./components/Product";
import { Grid } from "@mui/material";
import Filter from "./components/Filter";

const Products = () => {
  return (
    <div className="admin_products">
      <h1 className="admin_products_header">Products</h1>
      <Filter />
      <div className="admin_products_grid">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
