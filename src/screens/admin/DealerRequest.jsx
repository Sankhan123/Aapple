import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../../assets/header/auth-header";
import REACT_APP_API_URL from "../../assets/header/env";
import DealerInvites from "../../components/DealerInvites";

const DealerRequest = () => {
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    async function getrequest() {
      try {
        const res = await axios.get(`${REACT_APP_API_URL}/dealersrequest`, {
          headers: authHeader(),
        });
        if (res) {
          let DealerList = res.data.dealers;
          setRequests(DealerList);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getrequest();
  }, []);

  return (
    <section className="col">
      {/* requests table */}
      <section className="container  py-3">
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
                    <DealerInvites
                      key={index + 1}
                      data={data}
                      id={index + 1}
                      setRequests={setRequests}
                      requests={requests}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default DealerRequest;
