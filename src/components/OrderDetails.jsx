import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function OrderDetails() {


  let Location = useLocation();
  const data = Location.state;
  const [rowData, setRowData] = useState(data)
  // console.log(data.order_data[0])


  const handleChange = (e, id) => {
    let data = rowData
    const singleData = rowData.order_data.filter((rd) => { return id === rd.id })
    singleData[0]["price"] = e.target.value
    let rowIndex = rowData.order_data.findIndex((rd) => { return id === rd.id })
    data.order_data[rowIndex] = singleData[0]
    setRowData(data)
  }

  const dropDown = (e, id) => {
    let data = rowData
    const singleData = rowData.order_data.filter((rd) => { return id === rd.id })
    singleData[0]["gst"] = e.target.value
    let calc = singleData[0].price * (singleData[0].gst / 100)
    singleData[0]["gst_amount"] = calc
    
    let rowIndex = rowData.order_data.findIndex((rd) => { return id === rd.id })
    data.order_data[rowIndex] = singleData[0]
    console.log(data)
    setRowData(data)
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

          {rowData.order_data && rowData.order_data.map((data, index) => (


            <tbody key={index}>
              <tr className=" pt-4 " >
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


                <td className="fw-bold"> <select className="p-0" onChange={(e) => {
                  dropDown(e, data.id)
                }} >
                  <option value="0">Gst</option>
                  <option value="18">18</option>
                  <option value="25">25</option>
                  <option value="35">35</option>
                </select>  </td>
                <td className="fw-bold">{data.gst_amount}</td>
                <td className="fw-bold">10000</td>

              </tr>
            </tbody>



          )
          )
          }
        </table>
      </div>
    </>
  )

}
