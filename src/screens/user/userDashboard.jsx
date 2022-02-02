import React from "react";
import { Outlet, useLocation} from "react-router-dom";
import Sidebar from "../../components/UserSidebar";
import UserMain from "../../components/UserMain";

const UserDashboard = () => {
  let location = useLocation();


  return (
    <main >
      <div className="d-flex ">
        <Sidebar />
         <div className="col bg-light parent p-0">
          {location.pathname === "/user-dashboard" && <UserMain />
          }
          <Outlet />
         
        </div>
      </div>
    </main>
  );
};

export default UserDashboard;
