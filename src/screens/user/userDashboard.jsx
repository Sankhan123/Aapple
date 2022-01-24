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
// const DashboardNav = () => {
//   let Navigate = useNavigate();
//   return (
//     <nav className="col col-3 bg-info text-light">
//       <div className="text-center mt-3 border-bottom pb-2 border-2 border-light">
//         <h1 className="fs-1 text-capitalize fw-normal ">dashboard</h1>
//         <h2 className="fs-2 text-uppercase fw-light">user</h2>
//       </div>
//       <ul className="list-group flex gap-2 mt-4 pt-4 text-center">
//         <Link to="." className="text-decoration-none link-dark">
//           <li className="list-group-item rounded">Dashboard</li>
//         </Link>
//         <Link to="./purchase" className="text-decoration-none link-dark">
//           <li className="list-group-item rounded">Purchase</li>
//         </Link>
//         <Link to="./transaction" className="text-decoration-none link-dark">
//           <li className="list-group-item rounded">Transaction</li>
//         </Link>
       
//         <button
//           className="list-group-item bg-warning rounded shadow-sm mt-3"
//           onClick={() => Navigate("/login")}
//         >
//           Logout
//         </button>
//       </ul>
//     </nav>
//   );
// };
export default UserDashboard;
