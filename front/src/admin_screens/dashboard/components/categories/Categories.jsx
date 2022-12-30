import React from "react";
import "../../css/admin.products.css";
import Filter from "./components/Filter";
import Category from "./components/Category";

const Categories = () => {
  return (
    <div className="admin_products">
      <h1 className="admin_products_header">Categories</h1>
      <Filter />
      <div className="admin_products_grid">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default Categories;
