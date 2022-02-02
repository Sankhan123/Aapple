import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import REACT_APP_API_URL from "../assets/header/env";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function OrderDetails() {
  let Location = useLocation();
  let Navi = useNavigate();
  const data = Location.state;
  const [rowData, setRowData] = useState(data);
  const [TotalAmt, setTotal] = useState({
    totalPrice: 0,
    gstTotal: 0,
    netTotal: 0,
  });

  useEffect(() => {
    let totalPrice = 0;
    let gstTotal = 0;
    let netTotal = 0;
    rowData.order_data.forEach((rowData) => {
      if (parseInt(rowData.subtotal) > 0) {
        netTotal += parseInt(rowData.subtotal);
      }
      if (parseInt(rowData.price) > 0) {
        totalPrice += parseInt(rowData.price);
      }
      if (parseInt(rowData.gst_amount) > 0) {
        gstTotal += parseInt(rowData.gst_amount);
      }
    });
    setTotal({
      totalPrice: totalPrice,
      gstTotal: gstTotal,
      netTotal: netTotal,
    });
  }, [rowData]);

  const handleChange = (e, id) => {
    let data = JSON.parse(JSON.stringify(rowData));
    const singleData = rowData.order_data.filter((rd) => {
      return id === rd.id;
    });
    singleData[0]["price"] = e.target.value;
    singleData[0]["subtotal"] = singleData[0]["value"] * e.target.value;
    let rowIndex = rowData.order_data.findIndex((rd) => {
      return id === rd.id;
    });
    data.order_data[rowIndex] = singleData[0];
    setRowData(data);
  };

  const dropDown = (e, id) => {
    let data = JSON.parse(JSON.stringify(rowData));
    const singleData = rowData.order_data.filter((rd) => {
      return id === rd.id;
    });
    singleData[0]["gst"] = e.target.value;
    let calc1 = (singleData[0]["subtotal"] * (singleData[0].gst / 100)).toFixed(
      2
    );
    singleData[0]["gst_amount"] = parseFloat(calc1).toFixed(2);
    let calc2 =
      parseFloat(singleData[0]["subtotal"]) +
      parseFloat(singleData[0]["gst_amount"]);
    singleData[0]["subtotal"] = calc2.toFixed(2);
    let rowIndex = rowData.order_data.findIndex((rd) => {
      return id === rd.id;
    });
    data.order_data[rowIndex] = singleData[0];
    setRowData(data);
  };

  async function handleSubmit() {
    // post request
    let datas = rowData;

    try {
      const response = await axios.post(
        `${REACT_APP_API_URL}/add-price`,
        datas
      );
      if (response) {
        alert("Price added successfully");
        setRowData(data);
        Navi("/admin-dashboard");
      }
    } catch (e) {
      console.log(e);
    }
  }
  function pdfExport() {
    console.log("Saving report as pdf");
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(20);
    const title = "Order Details";
    const totalAmt = TotalAmt;
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
    const tableData = rowData.order_data.map((row, i) => [
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
      totalAmt.gstTotal ? totalAmt.gstTotal : "===",
      totalAmt.netTotal ? totalAmt.netTotal : "===",
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
  return (
    <>
      <div className="col ">
        <div className="row mt-3 mb-2">
          <h5 className="text-center">
            Dealer Name: <b>{rowData && rowData.dealer_data[0].company_name}</b>{" "}
          </h5>
        </div>
        <table className="table table-hover  border">
          <thead>
            <tr className="table-dark">
              <th scope="col">Catagory </th>
              <th scope="col">Product</th>
              <th scope="col">Size</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Gst</th>
              <th scope="col">Gst Amount</th>
              <th scope="col">Total</th>
            </tr>
          </thead>

          {rowData.order_data &&
            rowData.order_data.map((data, index) => (
              <tbody key={index}>
                <tr className=" pt-4 ">
                  <th scope="row">{data.cat_name}</th>
                  <td className="fw-bold">{data.product_name}</td>
                  <td className="fw-bold">{data.size_name}</td>
                  <td className="fw-bold">{data.value}</td>
                  <td className="fw-bold">
                    <input
                      type="number"
                      name={data.id}
                      min="0"
                      onChange={(e) => {
                        handleChange(e, data.id);
                      }}
                      required="required"
                    />
                  </td>

                  <td className="fw-bold">
                    {" "}
                    <select
                      className="p-0"
                      onChange={(e) => {
                        dropDown(e, data.id);
                      }}
                    >
                      <option value="0">Gst</option>
                      <option value="5">5</option>
                      <option value="12">12</option>
                      <option value="18">18</option>
                      <option value="25">25</option>
                    </select>{" "}
                  </td>
                  <td className="fw-bold">{data.gst_amount}</td>
                  <td className="fw-bold">{data.subtotal}</td>
                </tr>
              </tbody>
            ))}
        </table>
        <div className="my-4 text-center">
          <Link to=".." className="btn wit co  btn-danger">
            <i className="fas fa-arrow-left me-3"></i>
            <span className="me-3">Go Back</span>
          </Link>
          <button className="btn btn-success px-5 ms-3" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn btn-success px-5 ms-3" onClick={pdfExport}>
            Export as pdf
          </button>
          <span className="mx-2">{TotalAmt.totalPrice}</span>
          <span className="mx-2">{TotalAmt.gstTotal}</span>
          <span className="mx-2">{TotalAmt.netTotal}</span>
        </div>
      </div>
    </>
  );
}
