import React from "react";
import { Outlet,Link } from "react-router-dom";

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


const DashboardNav = () => {
  return (
    <nav className="col col-3 bg-info text-light">
      <div className="text-center mt-3 border-bottom pb-2 border-2 border-light">
        <h1 className="fs-1 text-capitalize fw-normal ">dashboard</h1>
        <h2 className="fs-3 text-uppercase fw-light">admin</h2>
      </div>
      <ul className="list-group flex gap-2 mt-4 pt-4 text-center">
        <Link to="./dealer-request" className="text-decoration-none link-dark">
          <li className="list-group-item rounded">Dealer Request</li>
        </Link>
        <Link to="./new-orders" className="text-decoration-none link-dark">
          <li className="list-group-item rounded">New Orders</li>
        </Link>
        <Link to="./all-orders" className="text-decoration-none link-dark">
          <li className="list-group-item rounded">All Orders</li>
        </Link>
        <Link to="./product-panel" className="text-decoration-none link-dark">
          <li className="list-group-item rounded">Product Panel</li>
        </Link>
        <button className="list-group-item bg-warning rounded shadow-sm mt-3">
          Logout
        </button>
      </ul>
    </nav>
  );
};
export default Dashboard;