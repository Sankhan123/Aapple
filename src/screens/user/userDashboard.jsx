import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/UserSidebar";

const UserDashboard = () => {
  let location = useLocation();
  return (
    <main >
      <div className="d-flex ">
        <Sidebar />
         <div className="col bg-light parent p-0">
          {location.pathname === "/user-dashboard" && <h1>User DashBoard</h1>}
          <Outlet />
         
        </div>
      </div>
    </main>
  );
};

export default UserDashboard;
