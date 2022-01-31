import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router";
import OrderDetail from "../../components/Order";

import authHeader from "../../assets/header/auth-header";
import REACT_APP_API_URL from "../../assets/header/env";

const NewOrders = () => {
  let location = useLocation();

  const [order, setOrder] = useState(null);
  useEffect(() => {
    async function getOrders() {
      try {
        const res = await axios.get(`${REACT_APP_API_URL}/get-orders`, {
          headers: authHeader(),
        });
        if (res) {
          let data = res.data.orders;

          setOrder(data);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getOrders();
  }, []);
  return (
    <section className="col">
      {location.pathname === "/admin-dashboard/new-orders" && (
        <div className="container my-3">
          <h5 className="alert co fw-bold display-7  text-center">
            New Orders
          </h5>
          <table className="table table-hover border">
            <thead>
              <tr className="table-dark">
                <th scope="col">Sno</th>
                <th scope="col">Date</th>
                <th scope="col">Dealer</th>
                <th scope="col">Product Count</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {order &&
                order.map((data, index) => {
                  return (
                    <OrderDetail key={index + 1} order={data} id={index + 1} />
                  );
                })}
            </tbody>
          </table>
        </div>
      )}

      <Outlet />
    </section>
  );
};
export default NewOrders;
