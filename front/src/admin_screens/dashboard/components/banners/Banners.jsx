import React from "react";
import "../../css/admin.products.css";
import Filter from "./components/Filter";
import Banner from "./components/Banner";

const Banners = () => {
  return (
    <div className="admin_products">
      <h1 className="admin_products_header">Banners</h1>
      <Filter />
      <div className="admin_products_grid">
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </div>
    </div>
  );
};

export default Banners;
