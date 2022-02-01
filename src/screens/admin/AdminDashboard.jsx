import React from "react";
import Sidebar from "../../components/AdminSidebar";
import { Outlet, useLocation } from "react-router-dom";
import AdminMain from "../../components/AdminMain";
const AdminDashboard = () => {
  let location = useLocation();
  return (
    <main>
      <div className="d-flex">
        <Sidebar />
        <div className="col m-0 parent p-0 bg-admin">
        {location.pathname === "/admin-dashboard" && <AdminMain />}
        <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
