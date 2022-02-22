import { useNavigate } from "react-router-dom";

export default function OrderDetail({ order, id }) {
  let Navigate = useNavigate();
  const navigateToOrder = () => {
    Navigate(`${id}`, { state: order });
  };
  return (
    <tr className=" pt-4 ">
      <th scope="row">{id}</th>
      <td className="fw-bold">{order.created_at.split("T")[0]}</td>
      <td className="fw-bold">{order.order_nr}</td>
      <td className="fw-bold">{order.dealer_data[0].contact_person}</td>
      <td className="fw-bold">{order.pro_count}</td>

      <td className="d-flex text-center gap-4">
        <button className=" fw-bold btn co btn-sm " onClick={navigateToOrder}>
          Details
        </button>
      </td>
    </tr>
  );
}
