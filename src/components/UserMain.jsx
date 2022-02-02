import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import authHeader from "../assets/header/auth-header";
import REACT_APP_API_URL from "../assets/header/env";
export default function UserMain() {
    const [order, setOrder] = useState([]);
    let Navigate = useNavigate();

    useEffect(() => {
        let dealer_id = "";
        if (sessionStorage.length) {
          const dealer_val = sessionStorage.getItem("user");
          const dealer = JSON.parse(dealer_val);
          dealer_id = dealer.user.reg_id;
        }
        async function getOrders() {
          try {
            const res = await axios.get(`${REACT_APP_API_URL}/get-orders-id/${dealer_id}`, {
              headers: authHeader(),
            });
            if (res) {
              let data = res.data;
    
              setOrder(data);
    
            }
          } catch (e) {
            console.log(e);
          }
        }
        getOrders();
      }, []);

      async function logout() {
        try {
          const res = await axios.get(`${REACT_APP_API_URL}/logout`, {
            headers: authHeader(),
          });
          if (res) {
            sessionStorage.removeItem("user");
            Navigate("/");
          }
        } catch (e) {
          console.log(e);
        }
      }

      const navToOrders =()=>{
        Navigate(`order`, { state: order });
      }
      
      const navToProcess =()=>{
        
        Navigate(`process`, { state: order });
      }
      
      const navToComplete =()=>{
     
        Navigate(`complete`, { state: order });
      }

  return(
      <>
        <div className="alertt  display-7 text-center rounded-none px-4 bg-white shadow-sm">
        <h1 className="h4 m-0 text-custom fw-bolder">
          SREE MURUGAN PAINTS COMPANY
        </h1>
        <button onClick={() => logout()} className="power-off">
          <i className="fas fa-power-off power"></i>
        </button>
      </div>


{order && order.length === 0 ? <></>:
      <section className="container">
        <div className="row mx-5 px-5 mt-5">
          <div className="col me-3">
          
              <div  onClick={navToOrders} className="cp card shadow-sm">
                <div className="custom-card first">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="card-body">
                  <h6 className="card-subtitle text-muted">
                  Pending Orders : <span className="fw-bold fs-5">{order.orders.length}</span>{" "}
                  </h6>
                </div>
              </div>
            
          </div>
          <div className="col mx-3">
             <div onClick={navToProcess} className="card cp shadow-sm">
                <div className="custom-card second">
                <i className="fas fa-tasks"></i>
                </div>
                <div className="card-body">
                  <h6 className="card-subtitle text-muted">
                  Processing Orders : <span className="fw-bold fs-5">{order.process_orders.length}</span>{" "}
                  </h6>
                </div>
              </div>
            
          </div>
          <div className="col mx-3">
            
              <div onClick={navToComplete} className="cp card shadow-sm">
                <div className="custom-card third">
                  <i className="fas fa-cubes"></i>
                </div>
                <div className="card-body">
                  <h6 className="card-subtitle text-muted">
                    Completed Orders : <span className="fw-bold fs-5">{order.complete_orders.length}</span>{" "}
                  </h6>
                </div>
              </div>
            
          </div>
        
        </div>
      </section>
      }
      </>
  )
}
