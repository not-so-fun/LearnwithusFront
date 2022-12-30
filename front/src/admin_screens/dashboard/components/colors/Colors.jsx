import * as React from "react";
import "../../css/admin.user.css";
import Filter from "./components/Filter";
import ColorTable from "./components/ColorTable";

const Users = () => {
  return (
    <div className="admin_users_table_div">
      <h2>Colors</h2>
      <Filter />
      <ColorTable />
    </div>
  );
};
export default Users;
