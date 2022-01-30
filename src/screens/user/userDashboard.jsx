import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/UserSidebar";
import authHeader from "../../assets/header/auth-header";
import REACT_APP_API_URL from "../../assets/header/env";
const UserDashboard = () => {
  let location = useLocation();
  const [order, setOrder] = useState(null);
  
  useEffect(() => {
    let dealer_id = "";
    if (sessionStorage.length) {
      const dealer_val = sessionStorage.getItem("user");
      const dealer = JSON.parse(dealer_val);
      dealer_id = dealer.user.reg_id;
    }
    async function getOrders() {
      try {
        const res = await axios.get(`${REACT_APP_API_URL}/get-orders-id/${dealer_id}`, {
          headers: authHeader(),
        });
        if (res) {
          let data = res.data.orders;

          setOrder(data);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getOrders();
  }, []);
  console.log(order)
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
