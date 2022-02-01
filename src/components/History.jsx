import React from 'react';
import { useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import authHeader from "../assets/header/auth-header";
import REACT_APP_API_URL from "../assets/header/env";
import Sidebar from "./AdminSidebar";


export default function History() {
    const [dealer,setDealer] = useState([]);

    let Location = useLocation();
    const data = Location.state;
    useEffect(() => {
    
        async function getDealer() {
            try {
            const res = await axios.get(`${REACT_APP_API_URL}/get-dealer-id/${data}`, {
                headers: authHeader(),
            });
            if (res) {
                let data = res.data.dealer;
                setDealer(data);
            
            }
            } catch (e) {
            console.log(e);
            }
        }
        getDealer();
        }, []);

        console.log(dealer)
  return (
    <>
    <div className="d-flex ">
 <Sidebar />
    <div className="col my-3">
  <h5 className="alert co display-7  text-center">
                Transaction Details
               </h5>
  <table className="table table-hover  border">
       <thead>
           <tr className="table-dark">
              
              <th scope="col">S.No </th>
              <th scope="col">Date</th>
              <th scope="col">Process</th>
              <th scope="col">Invoice</th>
              <th scope="col">Inward</th>
              <th scope="col">Outward</th>

             <th scope="col">Credit Balance</th>
             
            </tr>
           </thead>
            
                  {dealer.transactions &&
            dealer.transactions.map((subData ,index)=>(
                    <tbody key={index}>
                <tr className=" pt-4 ">
                  
                  <td className="fw-bold">{index +1}</td>
                  <td className="fw-bold">{subData.date}</td>
                  
                  <td className="fw-bold">{subData.mode}</td>
                  <td className="fw-bold">{subData.invoice_no ? subData.invoice_no:'-'}</td>
                  <td className="fw-bold">{subData.inward}</td>
                  <td className="fw-bold">{subData.outward}</td>                  
                 
                  <td className="fw-bold">{subData.credit_balance}</td>
                  
                 
                  
                  </tr>
                  </tbody>

              ))
            
                
                  } 
            

          </table>
          </div>
          <Outlet />
          </div>
    </>
  )
}
