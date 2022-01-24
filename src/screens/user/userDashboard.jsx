import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const UserDashboard = () => {
  let location = useLocation();
  return (
    <main >
      <div className="d-flex ">
        <Sidebar />
         <section className="col bg-light">
          {location.pathname === "/user-dashboard" && <h1>User DashBoard</h1>}
          <Outlet />
         
        </section>
      </div>
    </main>
  );
};

export default UserDashboard;
