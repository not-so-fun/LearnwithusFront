import React from "react";
import "../../css/admin.products.css";
import Filter from "./components/Filter";
import Banner from "./components/Banner";
import Brand from "./components/Banner";

const Brands = () => {
  return (
    <div className="admin_products">
      <h1 className="admin_products_header">Brands</h1>
      <Filter />
      <div className="admin_products_grid">
        <Brand />
      </div>
    </div>
  );
};

export default Brands;
