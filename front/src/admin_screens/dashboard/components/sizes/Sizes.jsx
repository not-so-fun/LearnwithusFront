import * as React from "react";
import "../../css/admin.user.css";
import SizeTable from "./components/SizeTable";
import Filter from "./components/Filter";

const Users = () => {
  return (
    <div className="admin_users_table_div">
      <h2>Users</h2>
      <Filter />
      <SizeTable />
    </div>
  );
};
export default Users;
