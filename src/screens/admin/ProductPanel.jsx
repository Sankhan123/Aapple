import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../../assets/header/auth-header";
import REACT_APP_API_URL from "../../assets/header/env";

const ProductPanel = () => {
  const [products, setProducts] = useState(null);
   useEffect(() => {

    async function get_list(){
      try{
        const res = await axios.get(`${REACT_APP_API_URL}/getcategory`,{ headers: authHeader() });
      if(res){
        let productList = res.data.category;
        setProducts(productList);
        
      }
      }catch(e){
        console.log(e);
      }

    }

    get_list();

  }, []);

  
    return <section className="container my-2">
      {/* <h5 className="alert co fw-bold display-7  text-center">
      Product Panel
              </h5> */}
       
        <table className="table border table-hover">
    <thead className="co ">
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