import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductPanel = () => {
  const [products, setProducts] = useState(null);
   useEffect(() => {

    const res = axios.get("http://127.0.0.1:8000/api/getcategory");

    if(res){
      console.log(res);
      let productList = res.data;
      setProducts(productList);
    }

  }, []);
  
    return <section className="container">
        <h1 className="alert alert-info mb-3 p-2">Product Panel</h1>
        <table className="table table-hover">
    <thead className="table-dark">
      <tr>
      <th scope="col">S.No</th>
        <th scope="col">Product Name</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      {products&&products.map((data,index)=>{
        return(
          <Product 
          key={index+1}
          id={index+1}
          prod={data}
          />
        );

      })}
    </tbody>
  </table>
  </section>
}

const Product = (props) => {
  return(
    <tr>
      <td ><span className="badge bg-primary">{props.id}</span></td>
      <td>{props.prod.cat_name}</td>
      <td><span className="badge rounded-pill bg-success">Available</span></td>
    </tr>
  );
};
export default ProductPanel;