import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Outlet, useNavigate } from "react-router";
import authHeader from "../../assets/header/auth-header";
import REACT_APP_API_URL from "../../assets/header/env";

const AllDealers = () => {
  const [users, setUsers] = useState(null);
  let location = useLocation();
  useEffect(() => {

    async function getdealers(){
      try{
        const res = await axios.get(`${REACT_APP_API_URL}/dealersrequest`,{ headers: authHeader() });
      if(res){
        let trueData = res.data.ondealers;
      setUsers(trueData);
    
        
      }
      }catch(e){
        console.log(e);
      }

    }
    getdealers();

  }, []);

  return (
    <section className="col">
      {location.pathname === "/admin-dashboard/all-dealers" && (
        <section className="container my-3">
          <div className="container">
          <h5 className="alert co fw-bold display-7  text-center">
          All Dealers
              </h5>
           
            <table className="table table-hover  border">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Sno</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone no</th>
                  <th  scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user, index) => {
                    return (
                      <Dealer key={index + 1} userData={user} id={index + 1} />
                    );
                  })}
              </tbody>
            </table>
          </div>
        </section>
      )}
      {/* requests table */}
      <Outlet />
    </section>
  );
};

const Dealer = (props) => {
  console.log(props);
  let Navigate = useNavigate();
  const navigateToUser = () => {
    
    Navigate(`${props.id}`, { state: props.userData });
  };
  const navigateToOrders = () => {
    Navigate(`aprocess`, { state: props.userData.id });
  };

  const navigateToTrans = (data) => {
    Navigate(`/admin-dashboard/transaction`, { state: data });
  };

 
  return (
    <tr className="pt-4" >
      <th scope="row cp" onClick={navigateToUser}>{props.id}</th>
      <td className="fw-normal cp" onClick={navigateToUser}>{props.userData.company_name}</td>
      <td className="fw-normal cp" onClick={navigateToUser}>{props.userData.email}</td>
      <td className="fw-normal cp" onClick={navigateToUser}>{props.userData.address}</td>
      <td className="fw-normal cp" onClick={navigateToUser}>{props.userData.phone}</td>
      <td className="d-flex text-center gap-4">
        <button className=" fw-bold btn co btn-sm " onClick={navigateToOrders}>
          Process Orders
        </button>
        <button className="fw-bold btn btn-success btn-sm" onClick={()=>{navigateToTrans(props.userData)}} >Transaction</button>
      </td>
    </tr>
  );
};
export default AllDealers;
