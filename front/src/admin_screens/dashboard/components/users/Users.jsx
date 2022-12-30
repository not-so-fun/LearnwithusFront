import * as React from "react";
import "../../css/admin.user.css";
import UserTable from "./components/UserTable";
import Filter from "./components/Filter";

const Users = () => {
  return (
    <div className="admin_users_table_div">
      <h2>Users</h2>
      <Filter />
      <UserTable />
    </div>
  );
};
export default Users;
