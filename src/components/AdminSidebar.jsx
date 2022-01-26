import {
    CDBSidebar,
     CDBSidebarContent,
     CDBSidebarFooter,
     CDBSidebarHeader,
     CDBSidebarMenu,
     CDBSidebarMenuItem,
   } from 'cdbreact';
import axios from 'axios';
import { Link,NavLink,useNavigate } from 'react-router-dom';
import authHeader from "../assets/header/auth-header";
import REACT_APP_API_URL from "../assets/header/env";


const Sidebar = () => {
  let Navigate = useNavigate();

async function logout(){

  try{
    const res = await axios.get(`${REACT_APP_API_URL}/logout`,{ headers: authHeader() });
  if(res){
    sessionStorage.removeItem('user');
    Navigate("/");
    
  }
  }catch(e){
    console.log(e);
  }
  
}

    return (
      <div className='' style={{ display: 'flex', minHeight: '100vh',padding:0}}>
        <CDBSidebar textColor="#fff" backgroundColor="#2B207F">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <Link to="." className="text-decoration-none" style={{ color: 'inherit' }}>
          ADMIN
            </Link>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink to=".">
            <CDBSidebarMenuItem icon="tachometer-alt">Dashboard</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="./dealer-request">
                <CDBSidebarMenuItem icon="table">Dealer Request</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="./all-dealers">
                <CDBSidebarMenuItem icon="users"> All Dealers</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="./new-orders">
                <CDBSidebarMenuItem icon="shopping-cart">New Orders</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="./product-panel">
                <CDBSidebarMenuItem icon="chart-line">Product Panel</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
  
          <CDBSidebarFooter className="mb-5"  >
            
          <NavLink to="/login" style={{ textDecoration: 'none', color: 'white',fontWeight:"500", }} >
                <CDBSidebarMenuItem icon="sign-out-alt" onClick={() => logout() }>Log Out</CDBSidebarMenuItem>
              </NavLink>
          
            
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };

  export default Sidebar;
  