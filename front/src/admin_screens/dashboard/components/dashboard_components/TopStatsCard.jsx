import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const TopStatsCard = ({ type, value, down }) => {
  return (
    <Card
      elevation={0}
      style={{ borderRadius: 20 }}
      className="admin_dashboard_top"
    >
      <CardContent className={`admin_dashboard_top_card_${type}`}>
        <div className={`admin_dashboard_top_card_number_${type}`}>
          {value}k
        </div>
        <h1 className={`admin_dashboard_top_card_lower_${type}`}>{down}</h1>
      </CardContent>
    </Card>
  );
};

export default TopStatsCard;
