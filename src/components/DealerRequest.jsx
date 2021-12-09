import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DealerRequest = () => {
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/dealersrequest")
      .then((response) => {
        let falseData = response.data.filter(
          (data) => data.user_status === "false"
        );
        setRequests(falseData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ requests ]);

  return (
    <section>
      {/* requests table */}
      <section className="requests-table-wrapper mt-4 pt-4">
        <div className="container">
          <h5 className="alert alert-primary display-6 fw-normal">
            Dealer Requests
          </h5>
            <table className="table table-hover">
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
  const acceptInvitation = () => {
  props.data.user_status = "true";
  const updateData = { user_status: props.data.user_status, reg_id: props.data.reg_id };
  console.log(updateData);
    axios.put('http://localhost/Aapple/aapple-php/api/updatedealer.php', updateData)
    .then(response => { console.log(response) })
    .catch(error => {
        console.error('There was an error!', error);
    });
  };
  const deleteInvitation = () => {
    alert("Are you sure to want to delete..?")
    props.data.user_status = 'null';
    props.removeRequests((prevdata) => [...prevdata, props.data]);
    const deleteData = {reg_id: props.data.reg_id };
    axios.put('http://localhost/Aapple/aapple-php/api/deletedealer.php', deleteData)
    .then(response => { console.log(response) })
    .catch(error => {
        console.error('There was an error!', error);
    });
  };
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.data.contact_person}</td>
      <td>{props.data.email}</td>
      <td>{props.data.address}</td>
      <td>{props.data.phone}</td>
      {props.data.user_status === "false" && (
        <td className="d-flex gap-2">
          <button className="btn btn-primary" onClick={acceptInvitation}>
            Accept
          </button>
          <button className="btn btn-danger" onClick={deleteInvitation}>Decline</button>
        </td>
      )}
    </tr>
  );
};
export default DealerRequest;
