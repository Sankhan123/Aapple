import React from "react";
import { Outlet, useLocation ,useNavigate} from "react-router-dom";
import Sidebar from "../../components/UserSidebar";
import axios from "axios";
import authHeader from "../../assets/header/auth-header";
import REACT_APP_API_URL from "../../assets/header/env";


const UserDashboard = () => {
  let location = useLocation();
  let Navigate = useNavigate();
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


  // const [order, setOrder] = useState(null);
  // useEffect(() => {
  //   async function getOrders() {
  //     try {
  //       const res = await axios.get(`${REACT_APP_API_URL}/get-orders`, {
  //         headers: authHeader(),
  //       });
  //       if (res) {
  //         let data = res.data.orders;

  //         setOrder(data);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   getOrders();
  // }, []);
  return (
    <main >
      <div className="d-flex ">
        <Sidebar />
         <div className="col bg-light parent p-0">
          {location.pathname === "/user-dashboard" &&
          (
          <>
              <div className="alertt  display-7 text-center rounded-none px-4 bg-white shadow-sm">
        <h1 className="h4 m-0 text-custom fw-bolder">
          SREE MURUGAN PAINTS COMPANY
        </h1>
        <button onClick={() => logout()} className="power-off">
          <i className="fas fa-power-off power"></i>
        </button>
      </div>

{/* 
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

                <th scope="col">Order</th>
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
    </section> */}
          </>)
          }
          <Outlet />
         
        </div>
      </div>
    </main>
  );
};

export default UserDashboard;
