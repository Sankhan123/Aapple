import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import authHeader from "../../assets/header/auth-header";
import REACT_APP_API_URL from "../../assets/header/env";

function Purchase() {
  const [purchaseData, setProducts] = useState(null);
  const [cartData, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function getproducts() {
      try {
        const res = await axios.get(`${REACT_APP_API_URL}/get-products`, {
          headers: authHeader(),
        });
        if (res) {
          let productList = res.data.products;
          setProducts(productList);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getproducts();
  }, []);
  return (
    <>
      {purchaseData && (
        <PurchaseTable
          catagoryName={purchaseData[count].cat_name}
          data={purchaseData[count]}
          cartData={cartData}
          setData={setData}
          setTotal={setTotal}
        />
      )}
      <div className="alert alert-secondary text-end">
        <button
          onClick={() => {
            count > 0 ? setCount(count - 1) : setCount(11);
          }}
        >
          {"<"}
        </button>
        <button>Submit</button>
        <button
          onClick={() => {
            count < purchaseData.length - 1 ? setCount(count + 1) : setCount(0);
          }}
        >
          {">"}
        </button>
        <span>Total Product : </span>
        <span>
          <b>{total}</b>
        </span>
      </div>
    </>
  );
}

function PurchaseTable({ catagoryName, data, cartData, setData, setTotal }) {
  useEffect(() => {
    if (cartData.length > 0) {
      let total = 0;
      cartData.forEach((rowData) => {
        total += rowData.value;
      });
      setTotal(total);
    }
  }, [cartData,setTotal]);
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
  return (
    <>
      <section className="col">
        <div className="alert alert-primary" role="alert">
          {catagoryName}
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              {data &&
                data.size.map((size, index) => {
                  return <th key={index}>{size.size_name}</th>;
                })}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.product.map((pro, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{pro.product_name}</th>
                    {data &&
                      data.size.map((size, index) => {
                        return (
                          <td key={index}>
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
      </section>
    </>
  );
}

export default Purchase;
