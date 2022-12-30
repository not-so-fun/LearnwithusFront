import React from "react";
import "../../css/admin.sales.css";
import SaleTable from "./components/SaleTable";
import Filter from "./components/Filter";

const Sales = () => {
  return (
    <div className="admin_sales">
      <h2>Sales</h2>
      <Filter />
      <SaleTable />
    </div>
  );
};

export default Sales;
