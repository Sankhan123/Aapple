import React from 'react';
import Sidebar from "./UserSidebar";
import jsPDF from "jspdf";
import "jspdf-autotable";


import { Outlet, useLocation} from "react-router-dom"


function Process() {
    let Location = useLocation();
    const data = Location.state;
    let totalPrice = 0;
    let totalGst= 0;
    let netTotal = 0;

    function pdfExport() {
        console.log("Saving report as pdf");
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        doc.setFontSize(20);
        const title = data && 'Order Details '+data.order_nr;
        const totalAmt = {totalPrice: totalPrice, gstTotal: totalGst, netTotal: netTotal};
        const headers = [
          [
            "SNO",
            "CATAGORY",
            "PRODUCT",
            "SIZE",
            "QUANTITY",
            "PRICE",
            "GST",
            "GST AMOUNT",
            "NET PRICE",
          ],
        ];
        const tableData = data.order_data.map((row, i) => [
          i + 1,
          row.cat_name ? row.cat_name : "---",
          row.product_name ? row.product_name : "---",
          row.size_name ? row.size_name : "---",
          row.value ? row.value : "---",
          row.price ? row.price : "---",
          row.gst ? row.gst : "---",
          row.gst_amount ? row.gst_amount : "---",
          row.subtotal ? row.subtotal : "---",
        ]);
        tableData.push([
          null,
          null,
          null,
          null,
          "Total Price",
          totalAmt.totalPrice ? totalAmt.totalPrice : "===",
          "GST + Net Total",
          totalAmt.gstTotal ? Math.round(totalAmt.gstTotal) : "===",
          totalAmt.netTotal ? Math.round(totalAmt.netTotal) : "===",
        ]);
        const tableContent = {
          startY: 50,
          head: headers,
          body: tableData,
        };
        doc.setFontSize(12);
        doc.text(title, marginLeft, 40);
        doc.autoTable(tableContent);
        doc.save("Order Details.pdf");
      }

    return (<>
        <div className="d-flex ">


            <Sidebar />


            <div className="col my-3">
                <div>
                        <h5 className="alert co ">
                        <span className='text-center col-6'>Processing Order {data &&
                        data.order_nr}</span>
                        <span className='text-end'>
                                <button onClick={pdfExport} className=" btn btn-info fw-bold">
                                    Export As pdf
                                </button></span>
                        </h5>
                   
                </div>                
              
            
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
                
            </div>
            <Outlet />
        </div>

    </>)
}

export default Process;
