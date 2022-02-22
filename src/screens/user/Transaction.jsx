import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import authHeader from "../../assets/header/auth-header";
import REACT_APP_API_URL from "../../assets/header/env";


export default function Transaction() {
    const [dealer,setDealer] = useState([]);
    useEffect(() => {
    
        async function getDealer() {
            let dealer_id = "";
            if (sessionStorage.length) {
              const dealer_val = sessionStorage.getItem("user");
              const dealer = JSON.parse(dealer_val);
              dealer_id = dealer.user.reg_id;
            }
            try {
            const res = await axios.get(`${REACT_APP_API_URL}/get-dealer-id/${dealer_id}`, {
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

  return (
    <>
    {dealer && <div className="col my-3">
  <h5 className="alert co display-7  text-center">
               {dealer.contact_person &&(dealer.contact_person).toUpperCase()} - Transaction Details
               </h5>
                
                <div className="col-lg-12 my-3 px-4 pr-1 col-md-6 col-sm-12 text-center">
                  { dealer && dealer.credit_amount >=0 ? ( <>
                  Credit Balance : Rs. <b>{dealer.credit_amount}</b>
                                </>):(<>Opening Balance : Rs. <b>{-(dealer.credit_amount)}</b></>) }              
              </div>
  <table className="table table-hover  border">
       <thead>
           <tr className="table-dark">
              
              <th scope="col">S.No </th>
              <th scope="col">Date</th>
              <th scope="col">Process</th>
              <th scope="col">Invoice</th>
              <th scope="col">Inward</th>
              <th scope="col">Outward</th>
             <th scope="col">Payable Amount</th>
             
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
                  
                  <td className="fw-bold">{subData.outward}</td>                  
                  <td className="fw-bold">{subData.inward}</td>
                  <td className="fw-bold">{subData.credit_balance}</td>
                  
                 
                  
                  </tr>
                  </tbody>

              ))
            
                
                  } 
            

          </table>
          </div>}
    </>
  )
}
