import React from 'react';
import Sidebar from "./UserSidebar";
import { Outlet, useLocation} from "react-router-dom";

export default function Tabel() {
    let Location = useLocation();
    const data = Location.state;
    console.log(data)
  return (
  <div className="d-flex ">
 <Sidebar />
 
 <div className="col my-3">
 <h5 className="alert co display-7  text-center">
                Pending Order
              </h5>
 <table className="table table-hover  border">
       <thead>
            <tr className="table-dark">
              
              <th scope="col">S.No </th>
              <th scope="col">Category</th>
             
              <th scope="col">Product</th>
              
              <th scope="col">Size</th>
              <th scope="col">Qty</th>
              
             
            </tr>
          </thead>
            
                 {data &&
            data.order_data.map((subData ,index)=>(
                    <tbody key={index}>
                <tr className=" pt-4 ">
                  
                  <td className="fw-bold">{index +1}</td>
                  <td className="fw-bold">{subData.cat_name}</td>
                  
                  <th scope="row">{subData.product_name}</th>
                  <td className="fw-bold">{subData.size_name}</td>
                  <td className="fw-bold">{subData.value}</td>
                  
                 
                  
                  </tr>
                  </tbody>

              ))
            
                  
                  
                  } 
            

          </table>
          </div>
      <Outlet />
  </div>);
}
