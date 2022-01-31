import React from 'react';
import { useLocation ,Link} from "react-router-dom";

export default function Uorders() {
    let Location = useLocation();
    const data = Location.state;
  
  console.log(data.orders[0])
  return (
      <>
        <div className="alertt  display-7 text-center rounded-none px-4 bg-white shadow-sm">
        <h1 className="h4 m-0 text-custom fw-bolder">
          Pending Orders
        </h1>
        <Link to=".." className="btn text-center  btn-success">
                <i className="fas fa-arrow-left me-3"></i>
                
        </Link>
      </div>
        <div className="col">
        <table className="table table-hover  border">
       <thead>
            <tr className="table-dark">
              
              <th scope="col">Catagory </th>
              <th scope="col">Product</th>
              <th scope="col">Size</th>
              <th scope="col">Value</th>
              <th scope="col">Progress</th>
              
            </tr>
          </thead>


          {data.orders &&
            data.orders.map((data,index) => (
                <tbody>

                </tbody>
               
            //   data.order_data.map((subData ,index)=>(
            //         <tbody key={index}>
            //     <tr className=" pt-4 ">
                  
            //       <td className="fw-bold">{subData.cat_name}</td>
                  
            //       <th scope="row">{subData.product_name}</th>
            //       <td className="fw-bold">{subData.size_name}</td>
                  
            //       <th scope="row">{subData.value}</th>
            //       <td className="fw-bold">Pending</td>
                  
            //       </tr>
            //       </tbody>

            //   ))
                
              ))
                  
                  
                  
                  }
                  

          </table>
          </div> 
      
      </>
  );
}
