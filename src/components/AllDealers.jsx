import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AllDealers = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/Aapple/aapple-php/api/dealersrequest.php")
      .then((response) => {
        let trueData = response.data.filter(
          (data) => data.user_status === "true"
        );
        setUsers(trueData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      {/* requests table */}
      <section className="requests-table-wrapper mt-4 pt-4">
        <div className="card ">
          <h5 className="card-header bg-primary text-white display-6 fw-normal">
            Dealer Requests
          </h5>
          <div className="card-body">
            <table className="table table-striped">
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
                {users &&
                  users.map((user, index) => {
                    return (
                      <Dealer
                        key={index + 1}
                        userData = {user}
                        id={index + 1}
                      />
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
};

const Dealer = (props) => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.userData.contact_person}</td>
      <td>{props.userData.email}</td>
      <td>{props.userData.address}</td>
      <td>{props.userData.phone}</td>
      <td className="d-flex gap-2">
          <button className="btn btn-success" >
            Details
          </button>
          <button className="btn btn-info">Transaction</button>
        </td>
    </tr>
  );
};
export default AllDealers;
