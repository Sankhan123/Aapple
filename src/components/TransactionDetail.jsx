import React from 'react';
import {  useLocation} from "react-router-dom";

export default function TransactionDetail() {
    let Location = useLocation();
    const data = Location.state;
    

  return (
      <>
     
 <div className="col my-3">
 <h5 className="alert co display-7  text-center">
               Transaction Details
              </h5>
 <table className="table table-hover  border">
       <thead>
            <tr className="table-dark">
              
              <th scope="col">S.No </th>
              <th scope="col">Date</th>
              <th scope="col">Mode</th>
              
              <th scope="col">Payment</th>
              <th scope="col">Transaction</th>
              <th scope="col">Credit Balance</th>
              
             
            </tr>
          </thead>
            
                 {data &&
            data.map((subData ,index)=>(
                    <tbody key={index}>
                <tr className=" pt-4 ">
                  
                  <td className="fw-bold">{index +1}</td>
                  <td className="fw-bold">{subData.date}</td>
                  
                  <td className="fw-bold">{subData.mode}</td>
                  <td className="fw-bold">{subData.payment}</td>
                  
                 
                  <td className="fw-bold">{subData.before_transaction}</td>
                  
                 
                  <td className="fw-bold">{subData.credit_balance}</td>
                  
                 
                  
                  </tr>
                  </tbody>

              ))
            
                  
                  
                  } 
            

          </table>
          </div>
      
      </>
  )
}
