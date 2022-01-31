import React from 'react';
import Sidebar from "./UserSidebar";
import { Outlet, useLocation ,Link} from "react-router-dom";
function Process() {
    let Location = useLocation();
    const data = Location.state;
    console.log(data)
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

                                    <td className="fw-bold">{subData.price}</td>

                                    <td className="fw-bold">{subData.gst}</td>

                                    <td className="fw-bold">{subData.gst_amount}</td>

                                    <td className="fw-bold">{subData.subtotal}</td>



                                </tr>
                            </tbody>

                        ))



                    }


                </table>
                <div className="d-flex justify-content-between align-items-center">
                <button className='ms-4 btn btn-success' >Submit</button>
                <button className='ms-4 btn btn-danger' >Delete</button>
                    <h5 className='me-4'>Total : {data.total}</h5>
               
                </div>
                
            </div>
            <Outlet />
        </div>

    </>)
}

export default Process;
