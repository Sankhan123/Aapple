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
import authHeader from "../../assets/header/auth-header";
import REACT_APP_API_URL from "../../assets/header/env";


const Sidebar = () => {
  let Navigate = useNavigate();

async function logout(){

  try{
    const res = await axios.get(`${REACT_APP_API_URL}/logout`,{ headers: authHeader() });
  if(res){
    console.log(res);
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
            <Link to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          ADMIN
            </Link>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="." activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="tachometer-alt">Dashboard</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="./dealer-request" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Dealer Request</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="./all-dealers" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="users"> All Dealers</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="./new-orders" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="shopping-cart">New Orders</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="./product-panel" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">Product Panel</CDBSidebarMenuItem>
              </NavLink>
  
              <NavLink exact to="/hero404"  activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="exclamation-triangle">{` 404 page`}</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
  
          <CDBSidebarFooter className="mb-5"  >
            
          <NavLink exact to="/login" style={{ textDecoration: 'none', color: 'white',fontWeight:"500", }} activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="sign-out-alt" onClick={() => logout() }>Log Out</CDBSidebarMenuItem>
              </NavLink>
          
            
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };

  export default Sidebar;
  