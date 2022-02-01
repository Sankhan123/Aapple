import React from 'react';
import Sidebar from "./UserSidebar";



import { Outlet, useLocation} from "react-router-dom"


function Process() {
    let Location = useLocation();
    const data = Location.state;

    return (<>
        <div className="d-flex ">


            <Sidebar />


            <div className="col my-3">
            <h5 className="alert co display-7  text-center">
                Processing Order
              </h5>
            
                <table className="table table-hover  border">
                    <thead>
                        <tr className="table-dark">

                            <th scope="col">S.No </th>
                            <th scope="col">Category</th>
                            <th scope="col">Product</th>

                            <th scope="col">Size</th>
                            <th scope="col">Qty </th>
                            <th scope="col">Price </th>
                            <th scope="col">Gst </th>
                            <th scope="col">Gst Amount</th>
                            <th scope="col">Total</th>


                        </tr>
                    </thead>

                    {data &&
                        data.order_data.map((subData, index) => (
                            <tbody key={index}>
                                <tr className=" pt-4 ">

                                    <td className="fw-bold">{index + 1}</td>
                                    <td className="fw-bold">{subData.cat_name}</td>

                                    <th scope="row">{subData.product_name}</th>
                                    <td className="fw-bold">{subData.size_name}</td>

                                    <td className="fw-bold">{subData.value}</td>
                                    <td className="fw-bold">{subData.price}</td>

                                    <td className="fw-bold">{subData.gst} %</td>

                                    <td className="fw-bold">{subData.gst_amount}</td>

                                    <td className="fw-bold">{subData.subtotal}</td>



                                </tr>
                            </tbody>

                        ))



                    }


                </table>
                
                <div className="d-flex aling-items-center justify-content-between  text-right ">
                
               {data && <h5 className='me-3 '>Total : <span className='fw-bold fs-4'>
                 {data.total}  ₹ </span></h5>} 
               
                </div>
                
            </div>
            <Outlet />
        </div>

    </>)
}

export default Process;
