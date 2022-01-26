import axios from "axios";
import React from "react";
import { purchaseData } from "../../components/purchase";

import { useEffect,useState } from "react";
import authHeader from "../../assets/header/auth-header";
import REACT_APP_API_URL from "../../assets/header/env";

function Purchase() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    
    async function getproducts(){
      try{
        const res = await axios.get(`${REACT_APP_API_URL}/get-products`,{ headers: authHeader() });
      if(res){
        let productList = res.data.products;
        setProducts(productList);
      }
      }catch(e){
        console.log(e);
      }

    }
    getproducts();
  }, []);

  return (
    <>
      <PurchaseCategory
        catagoryId={purchaseData.category[0].id}
        data={purchaseData}
      />
    </>
  );
}

function PurchaseCategory({ catagoryId, data }) {
  const [cartData, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartData.length > 0) {
      let total = 0;
      cartData.forEach((rowData) => {
        total += rowData.value;
      });
      setTotal(total);
    }
  }, [cartData]);
  function handleChange(e, productId, sizeId, catId) {
    let data = JSON.parse(JSON.stringify(cartData));
    if (data.length === 0) {
      data.push({
        cat_id: catId,
        size_id: sizeId,
        product_id: productId,
        value: parseInt(e.target.value),
      });
    } else {
      let rowIndex = data.findIndex((rowData) => {
        if (
          rowData.cat_id === catId &&
          rowData.size_id === sizeId &&
          rowData.product_id === productId
        ) {
          return true;
        } else {
          return false;
        }
      });
      if (rowIndex === -1) {
        data.push({
          cat_id: catId,
          size_id: sizeId,
          product_id: productId,
          value: parseInt(e.target.value),
        });
      } else {
        data[rowIndex] = {
          cat_id: catId,
          size_id: sizeId,
          product_id: productId,
          value: parseInt(e.target.value),
        };
      }
    }
    setData(data);
  }
  console.log(cartData);

  return (
    <>
      <section className="col">
        <div className="alert alert-primary" role="alert">
          Product Catagory {catagoryId}
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              {data.category[0].sizes.map((size) => {
                return <th>{size.size_name}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.category[0].product.map((pro) => {
              return (
                <tr>
                  <th scope="row">{pro.product_name}</th>
                  {data.category[0].sizes.map((size) => {
                    return (
                      <td>
                        <input
                          type="number"
                          name={size.id}
                          min="0"
                          max="100"
                          onChange={(e) => {
                            handleChange(e, pro.id, size.id, pro.cat_id);
                          }}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="alert alert-secondary text-end">
          <span>Total Product : </span>
          <span>
            <b>{total}</b>
          </span>
        </div>
      </section>
    </>
  );
}

export default Purchase;
