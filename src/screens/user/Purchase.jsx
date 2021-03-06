import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import authHeader from "../../assets/header/auth-header";
import REACT_APP_API_URL from "../../assets/header/env";
import Modal from "../../components/Modal";
import { useNavigate } from 'react-router-dom';
import PurchaseDashboard from "./PurchaseDashboard";

function Purchase() {
  const [load , setLoad ] = useState(true); 
  const Navi = useNavigate()
  const [purchaseData, setProducts] = useState(null);
  const [cartData, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
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
    setLoad(!load)
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
      setLoad(!load);
      if (response) {
        alert(response.data.message);
        setShowModal(false);
        Navi("/user-dashboard")
      }
    } catch (e) {
      alert("Something went wrong..!")
      console.log(e);
    }
  }
  function clearCart() {
    alert("Cart data cleared")
    setData([]);
    setShowModal(false);
    Navi("/user-dashboard")
  }
  
  return (
    <>
      {showModal && (
        <Modal
          load={load}
          setShowModal={setShowModal}
          cartData={cartData}
          addOrder={addOrder}
          clearCart={clearCart}
          total={total}
        />
      )}

      <div className="alertt co display-7 text-center rounded-none px-4">
        <h4>Purchase</h4>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              } else {
                setCount(purchaseData.length - 1);
              }
            }}
          >
            <i className="fas fa-caret-left"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary px-5"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <i className="fas fa-shopping-cart"></i>
            <span className="position-absolute top-0 start-100 badge-font translate-middle badge rounded-pill bg-danger badge-index">
            {cartData.length}
          </span>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              if (count < purchaseData.length - 1) {
                setCount(count + 1);
              } else {
                setCount(0);
              }
            }}
          >
            <i className="fas fa-caret-right"></i>
          </button>
        </div>
        <h4>Total Product : <span className="badge bg-info">{total}</span></h4>
      </div>
      <div className="container-fluid">
        <div className="row">
        <div className="col-3 pl-0">
          <div className="p-2 cus-sb">
        {purchaseData &&  purchaseData.map((catData,i)=>(
          <PurchaseDashboard 
          key={i}
          index={i}
          setCount={setCount}
          catList={catData.cat_name}
          />
        ))
        
        }
        </div>
        </div>
        
        <div className="col">
        {purchaseData && purchaseData[count] && (
        <PurchaseTable
          catagoryName={purchaseData[count].cat_name}
          data={purchaseData[count]}
          cartData={cartData}
          setData={setData}
          setTotal={setTotal}
          count={count}
        />
      )}
        </div>
        </div>
      </div>
    </>
  );
}

function PurchaseTable({ catagoryName, data, cartData, setData, setTotal, count}) {
  useEffect(() => {
    if (cartData.length > 0) {
      let total = 0;
      cartData.forEach((rowData) => {
        if(isNaN(rowData.value)){
          rowData.value = 0;
        }
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

  const getValues = (product_id, size_id, cat_id) => {
    if (cartData.length > 0) {
      let rowIndex = cartData.findIndex((rowData) => {
        if (
          rowData.cat_id === cat_id &&
          rowData.size_id === size_id &&
          rowData.product_id === product_id
        ) {
          return true;
        } else {
          return false;
        }
      });
      if (rowIndex !== -1) {
        return cartData[rowIndex].value;
      } else {
        return "";
      }
    }
  };
  return (
    <>
      <div>
        <header className="alert alert-light d-flex align-items-center fw-bold fs-4 text-dark m-0" role="alert">
          <span className="flex-grow-1 text-center">{catagoryName}</span>
          <span className="fs-6 fw-normal badge last fw-bold py-2">Page : {count + 1} of 12</span>
        </header>
        <table className="table border">
          <thead className="table-dark">
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
                if(pro.nil_sizes!=null){
                  var nilSizes = pro.nil_sizes;
                nilSizes = nilSizes.split(",");
                }
                
                return (
                  <tr key={index}>
                    <th scope="row">{pro.product_name}</th>
                    {data &&
                      data.size.map((size, index) => {
                        function checkSize(s){
                          if(nilSizes){
                            var sta;
                            sta = nilSizes.includes(s);
                            if(sta){
                              return "disabled";
                            }else{
                              return "";
                            }
                            
                          }
                        }
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
                              value={getValues(pro.id, size.id, pro.cat_id)}
                              disabled ={checkSize(size.size_name)}
                              
                            />
                          </td>
                        );
                      })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Purchase;
