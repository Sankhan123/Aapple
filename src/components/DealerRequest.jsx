import React from "react";
import { usestate } from "react";

const DealerRequest = () => {
    const {state, setstate} = usestate(true);
    const changeState = () => {
        setstate(state => !state);
    }
  return (
    <section>
      <h1 onClick={changeState} className="display-5">Dealer Request</h1>
      <DealerTable />
      <DealerTable />
    </section>
  );
};

const DealerTable = () => {
  return (
    <section>
      <ul class="list-group">
        <li class="list-group-item active" aria-current="true">
          New Request
        </li>
        <table class="table">
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
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </ul>
    </section>
  );
};
export default DealerRequest;
