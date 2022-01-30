import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function OrderDetails() {
  let Location = useLocation();
  const data = Location.state;
  const [rowData, setRowData] = useState(data);
  const handleChange = (e, id) => {
    let data = JSON.parse(JSON.stringify(rowData));
    const singleData = rowData.order_data.filter((rd) => {
      return id === rd.id;
    });
    singleData[0]["price"] = e.target.value;
    singleData[0]["subtotal"] = e.target.value;
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
    let calc1 = (singleData[0].price * (singleData[0].gst / 100)).toFixed(2);
    singleData[0]["gst_amount"] = parseFloat(calc1).toFixed(2);
    let calc2 =
      parseFloat(singleData[0].price) + parseFloat(singleData[0]["gst_amount"]);
    singleData[0]["subtotal"] = calc2.toFixed(2);
    let rowIndex = rowData.order_data.findIndex((rd) => {
      return id === rd.id;
    });
    data.order_data[rowIndex] = singleData[0];
    setRowData(data);
  };
  function handleSubmit() {
    // post request
    console.log(rowData.order_data);
  }
  return (
    <>
      <div className="col">
        <table className="table table-hover  border">
          <thead>
            <tr className="table-dark">
              <th scope="col">Catagory </th>
              <th scope="col">Product</th>
              <th scope="col">Size</th>
              <th scope="col">Value</th>
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
                      max="100"
                      onChange={(e) => {
                        handleChange(e, data.id);
                      }}
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
                      <option value="18">18</option>
                      <option value="25">25</option>
                      <option value="35">35</option>
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
          <button className="btn btn-success px-5 ms-3" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
}