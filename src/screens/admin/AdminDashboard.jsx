import React from "react";
import Sidebar from "../../components/AdminSidebar";
import { Outlet, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  let location = useLocation();
  return (
    <main className="">
      <div className="d-flex">
        <Sidebar />

        {location.pathname === "/admin-dashboard" && <h1>Admin DashBoard</h1>}
        <Outlet />
      </div>
    </main>
  );
};

export default AdminDashboard;
