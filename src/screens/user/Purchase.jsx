import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import authHeader from "../../assets/header/auth-header";
import REACT_APP_API_URL from "../../assets/header/env";
import Modal from "../../components/Modal";

function Purchase() {
  const [purchaseData, setProducts] = useState(null);
  const [cartData, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

  async function addOrder() {
    let dealer_id = "";
    if (sessionStorage.length) {
      const dealer_val = sessionStorage.getItem("user");
      const dealer = JSON.parse(dealer_val);
      dealer_id = dealer.user.reg_id;
    }
    let data = {
      dealer_id: dealer_id,
      order: cartData,
      pro_count: total,
      order_status: "Pending",
    };
    try {
      const response = await axios.post(`${REACT_APP_API_URL}/add-order`, data);
      if (response) {
        alert("Your order created successfully");
      }
    } catch (e) {
      console.log(e);
    }
  }

  const toggleModaltrue = () => {
    setShowModal(true);
  }
  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} cartData={cartData}/>}
      {purchaseData ? (
        purchaseData.map((purchaseData, index) => (
          <PurchaseTable
            key={index}
            catagoryName={purchaseData.cat_name}
            data={purchaseData}
            cartData={cartData}
            setData={setData}
            setTotal={setTotal}
          />
        ))
      ) : (
        <p>Loading ...</p>
      )}
      <div className="alert alert-light text-end">
        <button className="btn btn-secondary mx-3" onClick={toggleModaltrue}>Cart</button>
        <button className="btn btn-secondary me-3" onClick={addOrder}>Submit</button>
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
  }, [cartData, setTotal]);
  function handleChange(
    e,
    productId,
    sizeId,
    catId,
    productName,
    sizeName,
    catagoryName
  ) {
    let data = JSON.parse(JSON.stringify(cartData));
    if (data.length === 0) {
      data.push({
        cat_id: catId,
        cat_name: catagoryName,
        size_id: sizeId,
        size_name: sizeName,
        product_id: productId,
        product_name: productName,
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
          cat_name: catagoryName,
          size_id: sizeId,
          size_name: sizeName,
          product_id: productId,
          product_name: productName,
          value: parseInt(e.target.value),
        });
      } else {
        data[rowIndex] = {
          cat_id: catId,
          cat_name: catagoryName,
          size_id: sizeId,
          size_name: sizeName,
          product_id: productId,
          product_name: productName,
          value: parseInt(e.target.value),
        };
      }
    }
    setData(data);
  }
  return (
    <>
      <section className='px-2'>
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
                                handleChange(
                                  e,
                                  pro.id,
                                  size.id,
                                  pro.cat_id,
                                  pro.product_name,
                                  size.size_name,
                                  catagoryName
                                );
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
