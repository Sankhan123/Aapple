import React from "react";
import Sidebar from "./AdminSidebar";
import axios from "axios";
import REACT_APP_API_URL from "../assets/header/env";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function AdminProcess() {
  const [invoice, setInvoice] = useState();
  let Location = useLocation();
  const data = Location.state;
  let Navigate = useNavigate();
  let totalPrice = 0;
  let totalGst= 0;
  let netTotal = 0;
  const accept = async () => {
    let val = {
      id: data.id,
      dealer_id: data.dealer_id,
      invoice_no: invoice,
    };

    try {
      const response = await axios.post(
        `${REACT_APP_API_URL}/update-order`,
        val
      );
      if (response.data.status === 200) {
        alert(response.data.message);
        Navigate("/admin-dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const decline = async () => {
    let orderId = data.id;

    try {
      const res = await axios.delete(
        `${REACT_APP_API_URL}/delete-order/${orderId}`
      );
      if (res) {
        alert("Order removed");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="d-flex ">
        <Sidebar />

        <div className="col my-3">
          <h5 className="alert co display-7  text-center">Processing Order</h5>

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
                        data.order_data.map((subData, index) => {
                            
                            totalPrice +=  parseFloat(subData.price) * parseFloat(subData.value);
                            totalGst +=  parseFloat(subData.gst_amount);
                            netTotal +=  parseFloat(subData.subtotal);

                            console.log(totalPrice);
                            return(
                            <tbody key={index}>
                                <tr className=" pt-4 ">

                                    <th className="fw-bold">{index + 1}</th>
                                    <th scope="row">{subData.cat_name}</th>

                                    <td >{subData.product_name}</td>
                                    <td >{subData.size_name}</td>

                                    <td >{subData.value}</td>
                                    <td >{subData.price}</td>

                                    <td >{subData.gst} %</td>

                                    <td >{(subData.gst_amount).toFixed(2)}</td>

                                    <td >{(subData.subtotal).toFixed(2)}</td>



                                </tr>
                            </tbody>

                        )})



                    }
                    <tbody>
                    <tr className="table-secondary">
                            <th scope="col"> </th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Total :</th>
                            <th scope="col">{totalPrice} ₹</th>
                            <th scope="col">GST :</th>
                            <th scope="col">{Math.round(totalGst)} ₹</th>
                            <th scope="col">{Math.round(netTotal)} ₹</th>
                        </tr>
                    </tbody>
                </table>

          <div className="d-flex aling-items-center justify-content-between  text-center ">
            <input
              type="text"
              placeholder="Enter invoice number"
              onChange={(e) => {
                setInvoice(e.target.value);
              }}
            />
            <button onClick={accept} className=" btn btn-success wit fw-bold">
              Dispatch
            </button>
            <button onClick={decline} className=" btn btn-danger  wit fw-bold">
              Decline Order
            </button>
            
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default AdminProcess;
