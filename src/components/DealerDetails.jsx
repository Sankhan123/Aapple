import { useLocation,Link } from "react-router-dom";

function DealerDetails() {
  let Location = useLocation();
  const data = Location.state;
  console.log(data);
  return (
    <section className="mt-5 container bg-light">
      <h3 className="alert alert-primary">User Details</h3>
      <div className="bg-white text-dark p-3 mt-3 rounded-2">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span>User name : </span>
            {data.contact_person}
          </li>
          <li class="list-group-item">
            <span>Company Name : </span>
            {data.company_name}
          </li>
          <li class="list-group-item">
            <span>Email : </span>
            {data.email}
          </li>
          <li class="list-group-item">
            <span>Contact no : </span>
            {data.phone}
          </li>
          <li class="list-group-item">
            <span>Alternate No : </span>
            {data.alternate_number}
          </li>
          <li class="list-group-item">
            <span>GST no : </span>
            {data.gst_number}
          </li>
          <li class="list-group-item">
            <span>Address : </span>
            {data.address}
          </li>
        </ul>
      </div>
      <div className = "mt-4 text-center">
        <Link to=".." className="btn btn-danger">Back</Link>
      </div>
    </section>
  );
}

export default DealerDetails;
