import REACT_APP_API_URL from "../assets/header/env";
import axios from "axios";
import { useNavigate } from 'react-router';

const DealerInvites = ({ id, data, setRequests, requests }) => {
  // updating state on click for accept and decline
  let navigate = useNavigate();
  const filteringState = (id, requests) => {
    let filteredData = requests.filter((request) => {
      return request.id !== id;
    });
    setRequests(filteredData);
  };
  // accept invitation handler
  const acceptInvitation = async (id) => {
    alert("Are you sure to want to accept..?");
    filteringState(id, requests);
    const updateId = id;
    try {
      const res = await axios.put(
        `${REACT_APP_API_URL}/update-dealer/${updateId}`
      );
      if (res) {
        alert("New dealer added");
        navigate('/admin-dashboard');
      }
    } catch (e) {
      console.log(e);
    }
  };
  // deleting the invitation handler
  const deleteInvitation = async (id) => {
    alert("Are you sure to want to delete..?");
    filteringState(id, requests);
    const deleteId = id;
    try {
      const res = await axios.delete(
        `${REACT_APP_API_URL}/delete-dealer/${deleteId}`
      );
      if (res) {
        console.log("Request removed");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <tr>
      <th scope="row fw-bolder">{id}</th>
      <td className="fw-bold">{data.contact_person}</td>
      <td className="fw-bold">{data.email}</td>
      <td className="fw-bold">{data.address}</td>
      <td className="fw-bold">{data.phone}</td>
      {data.user_status === "false" && (
        <td className="d-flex gap-2">
          <button
            className="btn fw-bold co btn-primary btn-sm"
            onClick={() => {
              acceptInvitation(data.id);
            }}
          >
            Accept
          </button>
          <button
            className="btn fw-bold btn-danger btn-sm"
            onClick={() => {
              deleteInvitation(data.id);
            }}
          >
            Decline
          </button>
        </td>
      )}
    </tr>
  );
};

export default DealerInvites;
