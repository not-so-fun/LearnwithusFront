import React from "react";
import "../../css/admin.products.css";
import Filter from "./components/Filter";
import SubCategory from "./components/SubCategory";

const SubCategories = () => {
  return (
    <div className="admin_products">
      <h1 className="admin_products_header">Sub Categories</h1>
      <Filter />
      <div className="admin_products_grid">
        <SubCategory />
      </div>
    </div>
  );
};

export default SubCategories;
