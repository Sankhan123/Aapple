import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import authHeader from "../../assets/header/auth-header";
import REACT_APP_API_URL from "../../assets/header/env";

const NewOrders = () => {
  useEffect(async() => {

    async function getOrders(){
      try{
        const res = await axios.get(`${REACT_APP_API_URL}/get-orders`,{ headers: authHeader() });
      if(res){
        console.log(res)
        
      }
      }catch(e){
        console.log(e);
      }

    }
    getOrders();

  }, []);
  return (
    <section className="container my-3">
      <div className="container">
        <h5 className="alert co fw-bold display-7  text-center">New Orders</h5>
      </div>
    </section>
  );
};
export default NewOrders;
