import React from "react";
import TopStatsCard from "./components/dashboard_components/TopStatsCard";
import PieCardChart from "./components/dashboard_components/PieCardChart";
import BarCardChart from "./components/dashboard_components/BarCardChart";
import LineChart from "./components/dashboard_components/LineCardChart";

import "./css/admin.dashboard.css";

const AllTopStats = () => {
  return (
    <div className="admin_dashboard_top">
      <TopStatsCard type={1} value={20} down={"users"} />
      <TopStatsCard type={2} value={10} down={"orders"} />
      <TopStatsCard type={3} value={45} down={"bets"} />
      <TopStatsCard type={4} value={115} down={"yugal"} />
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div className="admin_dashboard">
      <h2>Welcome! Yugal Pariyar</h2>
      <AllTopStats />
      <div className="admin_dashboard_chart">
        <PieCardChart />
        <BarCardChart />
      </div>
      <div className="admin_dashboard_chart_each_full">
        <LineChart />
      </div>
      <div style={{ marginBottom: 50 }}></div>
    </div>
  );
};

export default AdminDashboard;
