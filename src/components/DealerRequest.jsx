import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DealerRequest = () => {
  const [falseDatas, setFalseDatas] = useState([]);
  const [trueDatas, setTrueDatas] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/Aapple/aapple-php/api/dealersrequest.php")
      .then((response) => {
        console.log(response.data);
      });
  }, []);
  return (
    <section>
      <h1 className="display-5">Dealer Request</h1>
      <DealerTable data={falseDatas}/>
      <DealerTable data={trueDatas}/>
    </section>
  );
};

const DealerTable = (props) => {
  return (
    <section>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          New Request
        </li>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sno</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone no</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-danger">Decline</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </ul>
    </section>
  );
};
export default DealerRequest;
