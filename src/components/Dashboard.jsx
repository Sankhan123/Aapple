import React from "react";
import DashboardNav from "./DashboardNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <main className="container-fluid">
      <div className="row vh-100">
        <DashboardNav />
        <section className="col bg-light">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
