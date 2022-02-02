import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import authHeader from "../assets/header/auth-header";
import REACT_APP_API_URL from "../assets/header/env";

const Sidebar = () => {
  let Navigate = useNavigate();

  async function logout() {
    try {
      const res = await axios.get(`${REACT_APP_API_URL}/logout`, {
        headers: authHeader(),
      });
      if (res) {
        sessionStorage.removeItem("user");
        Navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="sticky-top" style={{ display: "flex", height: "100vh" }}>
      <CDBSidebar textColor="#fff" backgroundColor="#2B207F">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link
            to="."
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            ADMIN
          </Link>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/admin-dashboard">
              <CDBSidebarMenuItem icon="tachometer-alt">
                Dashboard
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/admin-dashboard/dealer-request">
              <CDBSidebarMenuItem icon="user-circle">
                Dealer Request
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/admin-dashboard/all-dealers">
              <CDBSidebarMenuItem icon="users"> All Dealers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/admin-dashboard/new-orders">
              <CDBSidebarMenuItem icon="shopping-cart">
                New Orders
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/admin-dashboard/product-panel">
              <CDBSidebarMenuItem icon="cubes">
                Product Panel
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter className="mb-5">
          <NavLink
            to="/login"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "500",
            }}
          >
            <CDBSidebarMenuItem icon="sign-out-alt" onClick={() => logout()}>
              Log Out
            </CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
