import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import authHeader from "../assets/header/auth-header";
import REACT_APP_API_URL from "../assets/header/env";

const AdminMain = () => {
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
  return (
    <>
      <div className="alertt  display-7 text-center rounded-none px-4 bg-white shadow-sm">
        <h1 className="h4 m-0 text-custom fw-bolder">
          SREE MURUGAN PAINTS COMPANY
        </h1>
        <button onClick={() => logout()} className="power-off">
          <i class="fas fa-power-off power"></i>
        </button>
      </div>
      <section className="container">
        <div className="row mx-5 px-5 mt-5">
          <div class="col me-3">
            <div className="card shadow-sm">
              <div className="custom-card first"><i class="fas fa-user-circle"></i></div>
              <div className="card-body">
                  <h6 className="card-subtitle text-muted">Dealers Request : <span className="fw-bold fs-5">00</span> </h6>
              </div>
            </div>
          </div>
          <div class="col mx-3">
            <div className="card shadow-sm">
              <div className="custom-card second"><i class="fas fa-shopping-cart"></i></div>
              <div className="card-body">
                  <h6 className="card-subtitle text-muted">New Orders : <span className="fw-bold fs-5">00</span> </h6>
              </div>
            </div>
          </div>
          <div class="col mx-3">
            <div className="card shadow-sm">
              <div className="custom-card third"><i class="fas fa-cubes"></i></div>
              <div className="card-body">
                  <h6 className="card-subtitle text-muted">Product Panel : <span className="fw-bold fs-5">12</span> </h6>
              </div>
            </div>
          </div>
          <div class="col ms-3">
            <div className="card shadow-sm">
              <div className="custom-card last"><i class="fas fa-users"></i></div>
              <div className="card-body">
                  <h6 className="card-subtitle text-muted">All Dealers : <span className="fw-bold fs-5">00</span> </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminMain;
