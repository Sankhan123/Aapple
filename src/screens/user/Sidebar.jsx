import React from 'react';
import {
    CDBSidebar,
     CDBSidebarContent,
     CDBSidebarFooter,
     CDBSidebarHeader,
     CDBSidebarMenu,
     CDBSidebarMenuItem,
   } from 'cdbreact';

import { Link,NavLink } from 'react-router-dom';



export default function Sidebar() {
  return( <div style={{ display: 'flex', minHeight: '100vh',padding:0}}>


<CDBSidebar textColor="#fff" backgroundColor="#2B207F">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <Link to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          USER
            </Link>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="." activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="tachometer-alt">Dashboard</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="./purchase" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="shopping-cart">Purchase</CDBSidebarMenuItem>
              </NavLink>
              
              <NavLink exact to="./transaction" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="credit-card">Transaction</CDBSidebarMenuItem>
              </NavLink>
  
              <NavLink exact to="/hero404"  activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="exclamation-triangle">{` 404 page`}</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
  
          <CDBSidebarFooter className="mb-5" >
          <NavLink exact to="/login" style={{ textDecoration: 'none', color: 'white',fontWeight:"500", }} activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="sign-out-alt">Log Out</CDBSidebarMenuItem>
              </NavLink>
          
            
          </CDBSidebarFooter>
        </CDBSidebar>

  </div>)

}
