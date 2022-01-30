import { useLocation, Link } from "react-router-dom";

function DealerDetails() {
  let Location = useLocation();
  const data = Location.state;
  return (
    <div className=" py-3 min-100vh bg-war col">
      <h5 className=" mt-3 alert co display-7  text-center">User Details</h5>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="bg-white text-dark  p-3 my-2 rounded-2">
              <h5>
                User name{" "}
                <span className="fw-bold pl-3"> : {data.contact_person}</span>
              </h5>
            </div>
            <div className="bg-white text-dark p-3 my-2 rounded-2">
              <h5>
                Email <span className="fw-bold pl-5 ml-3"> : {data.email}</span>
              </h5>
            </div>
            <div className="bg-white text-dark p-3 my-2 rounded-2">
              <h5>
                Contact no <span className="fw-bold pl-3"> : {data.phone}</span>
              </h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="bg-white text-dark  p-3 my-2 rounded-2">
              <h5>
                Company Name{" "}
                <span className="fw-bold pl-3"> : {data.company_name}</span>
              </h5>
            </div>
            <div className="bg-white text-dark p-3 my-2 rounded-2">
              <h5>
                Alternate No{" "}
                <span className="fw-bold pl-5 ">
                  {" "}
                  : {data.alternate_number}
                </span>
              </h5>
            </div>
            <div className="bg-white text-dark p-3 my-2 rounded-2">
              <h5>
                GST No{" "}
                <span className="fw-bold pl-5 ml-5"> : {data.gst_number}</span>
              </h5>
            </div>
          </div>
          <div className="col-12">
            <div className="bg-white text-dark p-3 my-1 rounded-2">
              <h5>
                Address <span className="fw-bold pl-5 ">: {data.address}</span>
              </h5>
            </div>
            <div className="my-4 text-center">
              <Link to=".." className="btn wit co  btn-danger">
                <i className="fas fa-arrow-left me-3"></i>
                <span className="me-3">Go Back</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealerDetails;
