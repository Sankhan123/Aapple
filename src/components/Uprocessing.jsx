import React from 'react';
import { useLocation ,useNavigate,Link} from "react-router-dom";

export default function Uprocessing() {
  let Location = useLocation();
  const data = Location.state;
let Navigate = useNavigate()
const navigateToData = (data) => {

  Navigate(`/user-dashboard/pending`, { state: data });
};
  
  return (
      <>
       <div className="alertt  display-7 text-center rounded-none px-4 bg-white shadow-sm">
        <h1 className="h4 m-0 text-custom fw-bolder">
          Processing Orders
        </h1>
        <Link to=".." className="btn text-center  btn-success">
                <i className="fas fa-arrow-left me-3"></i>
                
        </Link>
      </div>
        <div className="col my-3">
        <table className="table table-hover  border">
       <thead>
            <tr className="table-dark">
              
              <th scope="col">S.No </th>
              <th scope="col">Date</th>
              <th scope="col">Product</th>
              
              <th scope="col">Progress</th>
              
              <th scope="col">Action</th>
            </tr>
          </thead>
{
    data.process_orders && 
    data.process_orders.map((data,index)=>(
        <tbody key={index}>
                <tr className=" pt-4 ">
                  
                  <td className="fw-bold">{index + 1}</td>
                  
                  <th scope="row">{data.created_at.split('T')[0]}</th>
                  <td className="fw-bold">{data.pro_count}</td>
                  
                  
                  <td className="fw-bold">{data.order_status}</td>
                  <td className="fw-bold">
                      <button onClick={()=>{navigateToData(data)}} className='btn btn-success btn-sm '>View
                      </button>
                      
                      </td>
                  
                  </tr>
                  </tbody>
    ))
}

                   

          </table>
          </div> 
      
      </>
  );
}
