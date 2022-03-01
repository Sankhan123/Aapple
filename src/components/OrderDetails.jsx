import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import REACT_APP_API_URL from "../assets/header/env";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import authHeader from "../assets/header/auth-header";

export default function OrderDetails() {
  let Location = useLocation();
  let Navi = useNavigate();
  const data = Location.state;
  const staticSizes = ['50 ML','100 ML','200 ML','500 ML','1 LTR','4 LTR','10 LTR','20 LTR','1 KG','5 KG','10 KG','20 KG'];
  const [getOrder, setOrder] = useState([]);
  const [rowData, setRowData] = useState(data);
  const [TotalAmt, setTotal] = useState({
    totalPrice: 0,
    gstTotal: 0,  
    netTotal: 0,
  });

  useEffect(() => {

    async function getOrders() {
      try {
        const res = await axios.get(
          `${REACT_APP_API_URL}/get-val-id/${rowData.id}`,
          {
            headers: authHeader(),
          }
        );
        if (res) {
          let data = Object.values(res.data.orders);
          setOrder(data);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getOrders();

    let totalPrice = 0;
    let gstTotal = 0;
    let netTotal = 0;
    rowData.order_data.forEach((rowData) => {
      if (parseFloat(rowData.subtotal) > 0) {
        netTotal += parseFloat(rowData.subtotal);
      }
      if (parseFloat(rowData.price) > 0) {
        totalPrice += parseFloat(rowData.price) * parseFloat(rowData.value);
      }
      if (parseFloat(rowData.gst_amount) > 0) {
        gstTotal += parseFloat(rowData.gst_amount);
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
    if (singleData[0].gst) {
      singleData[0]["price"] = parseFloat(e.target.value);
      singleData[0]["gst_amount"] =
        (singleData[0]["value"] *
          singleData[0]["price"] *
          singleData[0]["gst"]) /
        100;
      singleData[0]["subtotal"] =
        singleData[0]["value"] * parseFloat(e.target.value) +
        singleData[0]["gst_amount"];
    } else {
      singleData[0]["price"] = parseFloat(e.target.value);
      singleData[0]["subtotal"] =
        singleData[0]["value"] * parseFloat(e.target.value);
    }

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
    let calc1 = 0
    let calc2 = 0;
    // assigning the gst value
    singleData[0]["gst"] = parseFloat(e.target.value);
    // calculating the gst amount
    calc1 =
      (singleData[0]["value"] * singleData[0]["price"] * singleData[0]["gst"]) /
      100;
    singleData[0]["gst_amount"] = Math.round(calc1 * 100)/100
    // calculating the sub total
    calc2 = (singleData[0]["value"] * singleData[0]["price"]) + singleData[0]["gst_amount"];
    singleData[0]["subtotal"] = Math.round(calc2 * 100)/100
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
    const title =  rowData && 'Order Details '+rowData.order_nr;
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
  return (
    <>
      <div className="col ">
        <div>
          <div>
            <table className="table table-stripped none" id="demo">
            
               <thead>
                <tr>
                  <td>Category</td>
                  <td>Products</td>
                  <td>50 ML</td>
                  <td>100 ML</td>
                  <td>200 ML</td>
                  <td>500 ML</td>
                  <td>1 LTR</td>
                  <td>4 LTR</td>
                  <td>10 LTR</td>
                  <td>20 LTR</td>
                  <td>1 KG</td>
                  <td>5 KG</td>
                  <td>10 KG</td>
                  <td>20 KG</td>
                </tr>
              </thead> 
              {getOrder && getOrder.map((data,index) => (
              <tbody key={index}>
                <tr className=" pt-4 ">
                  <th scope="row">{data.category}</th>
                  <th scope="row">{data.product_name}</th>
                  {staticSizes.map((size,i)=>{
                    let getSizes = Object.keys(data.size);
                    let exactSize = getSizes.filter(getsize=>(getsize===size));
                    return(
                      <td key={i}>{data.size[exactSize[0]]==null ? '-':data.size[exactSize[0]]}</td>
                    )
                  })}
                </tr>
                </tbody>
                  ))}
            </table>
            
          </div>
        </div>
        <div className="row mt-3 mb-2">
          <h5 className="text-center">
            Dealer Name: <b>{rowData && rowData.dealer_data[0].contact_person + '['+rowData.order_nr+']'}</b>{" "}
          </h5>
        </div>
        <table className="table table-hover border">
          <thead className="table-dark">
            <tr>
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
                  <td>{data.product_name}</td>
                  <td>{data.size_name}</td>
                  <td>{data.value}</td>
                  <td>
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

                  <td className="">
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
                  <td className="">{data.gst_amount}</td>
                  <td className="fw-bold">{data.subtotal}</td>
                </tr>
              </tbody>
            ))}
          <tbody>
            <tr className="table-dark text-center">
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Total :</th>
              <th scope="col">{TotalAmt.totalPrice} ₹</th>
              <th scope="col"></th>
              <th scope="col">{Math.round(TotalAmt.gstTotal)} ₹</th>
              <th scope="col">{Math.round(TotalAmt.netTotal)} ₹</th>
            </tr>
          </tbody>
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
          <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-success px-5 ms-3"
                    table="demo"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
        </div>
      </div>
    </>
  );
}
