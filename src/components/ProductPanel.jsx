import React from "react";

const ProductPanel = () => {
    return <section className="container">
        <h1 className="alert alert-info mb-5 p-2">Product Panel</h1>
        <table className="table">
    <thead className="table-dark">
      <tr>
        <th scope="col">Product Name</th>
        <th scope="col">Serial No</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mark</td>
        <td>1239</td>
      </tr>
      <tr>
        <td>Jacob</td>
        <td>1111</td>
      </tr>
      <tr>
        <td>Larry the Bird</td>
        <td>9999</td>
      </tr>
    </tbody>
  </table>
  </section>
}
export default ProductPanel;