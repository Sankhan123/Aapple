import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../../assets/header/auth-header";
import REACT_APP_API_URL from "../../assets/header/env";

const DealerRequest = () => {
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    async function getrequest(){

      try{
        const res = await axios.get(`${REACT_APP_API_URL}/dealersrequest`,{ headers: authHeader() });
      if(res){
        let DealerList = res.data.dealers;
        setRequests(DealerList);
        
      }
      }catch(e){
        console.log(e);
      }

    }
    getrequest();
  }, []);

  return (
    <section className="col">
      {/* requests table */}
      <section className="requests-table-wrapper  py-3">
        <div className="container">
        <h5 className="alert co display-7 fw-bold  text-center">
        Dealer Requests
              </h5>
          
            <table className="table table-hover border">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Sno</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone no</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests &&
                  requests.map((data, index) => {
                    return (
                      data.user_status === "false" && (
                        <Dealer
                          key={index + 1}
                          data={data}
                          id={index + 1}
                          removeRequests={setRequests}
                        />
                      )
                    );
                  })}
              </tbody>
            </table>
          </div>
      </section>
    </section>
  );
};

const Dealer = (props) => {
  const acceptInvitation = async() => {
  const updateId = props.data.id ;
  alert("Are you sure to want to accept..?")
  try{
    const res =await axios.put(`${REACT_APP_API_URL}/update-dealer/${updateId}`);
    if(res){
      console.log('New dealer added');
    }
  }catch(e){
    console.log(e);
  }

  };
  const deleteInvitation = async() => {
    alert("Are you sure to want to delete..?")
    props.data.user_status = 'null';
    props.removeRequests((prevdata) => [...prevdata, props.data]);
    const deleteId = props.data.id;

    try{
      const res =await axios.delete(`${REACT_APP_API_URL}/delete-dealer/${deleteId}`);
      if(res){
        console.log('Request removed');
      }
    }catch(e){
      console.log(e);
    }
   
  };
  return (
    <tr>
      
      <th scope="row fw-bolder">{props.id}</th>
      <td className="fw-bold">{props.data.contact_person}</td>
      <td className="fw-bold">{props.data.email}</td>
      <td className="fw-bold">{props.data.address}</td>
      <td className="fw-bold">{props.data.phone}</td>
      {props.data.user_status === "false" && (
        <td className="d-flex gap-2">
          <button className="btn fw-bold co btn-primary btn-sm" onClick={acceptInvitation}>
            Accept
          </button>
          <button className="btn fw-bold btn-danger btn-sm" onClick={deleteInvitation}>Decline</button>
        </td>
      )}
    </tr>
  );
};
export default DealerRequest;
