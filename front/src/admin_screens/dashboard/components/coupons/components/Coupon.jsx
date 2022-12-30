import { Card, Switch, Typography } from "@mui/material";
import React from "react";

const Coupon = () => {
  return (
    <Card elevation={0} className="admin_coupon_card">
      <div>
        <h3>Creator</h3>
        <Typography>WATCH</Typography>
      </div>
      <div>
        <Switch checked={true} inputProps={{ "aria-label": "controlled" }} />
      </div>
    </Card>
  );
};

export default Coupon;
