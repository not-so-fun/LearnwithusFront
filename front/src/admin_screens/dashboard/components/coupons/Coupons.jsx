import React from "react";
import "../../css/admin.coupon.css";
import Coupon from "./components/Coupon";

const Coupons = () => {
  return (
    <div className="admin_coupon">
      <h2>Coupons</h2>
      <div className="admin_coupon_list">
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
      </div>
    </div>
  );
};

export default Coupons;
