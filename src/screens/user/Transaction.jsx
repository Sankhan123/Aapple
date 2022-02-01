// import React from "react";
// import { useEffect, useState } from "react";
// import { Formik, Form, Field } from "formik";
// import { useNavigate } from "react-router-dom";
// import * as Yup from "yup";
// import axios from "axios";
// import authHeader from "../../assets/header/auth-header";
// import REACT_APP_API_URL from "../../assets/header/env";

// const SigninSchema = Yup.object().shape({
//   mode: Yup.string()
//     .required("Required"),
//   date: Yup.string()
//     .required("Required"),
//   payment: Yup.number().required("Required").min(0, 'Min value 0.'),
// });

// export default  function Transaction() {
//   const [dealer,setDealer] = useState([]);
//    let Navigate = useNavigate();
//    let dealer_id = "";
//     if (sessionStorage.length) {
//       const dealer_val = sessionStorage.getItem("user");
//       const dealer = JSON.parse(dealer_val);
//       dealer_id = dealer.user.reg_id;
//     }
//   useEffect(() => {
    
//     async function getDealer() {
//       try {
//         const res = await axios.get(`${REACT_APP_API_URL}/get-dealer-id/${dealer_id}`, {
//           headers: authHeader(),
//         });
//         if (res) {
//           let data = res.data.dealer;
//           setDealer(data);
        
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     }
//     getDealer();
//   }, []);
  
//   return (

//     <React.Fragment>
//       <Formik
//         initialValues={{
//           date: "",
//           mode: "",
//           payment: "",
//           dealer_id:dealer_id,
//         }}
//         validationSchema={SigninSchema}
//         onSubmit={async (values) => {
//           console.log(values);
//           try {
//             const response = await axios.post(
//               `${REACT_APP_API_URL}/add-transaction`,
//               values
//             );
//             if (response.data.status === 200) {
//               alert(response.data.message);
//               Navigate("/user-dashboard");
//             }
//           } catch (err) {
//             console.log(err);
//           }
//         }}
//       >
//         {({ errors, touched }) => (
//           <Form>
//             <div className="login-wrapper my-3 col">
//               <h5 className="alert co display-7  text-center">
//                 Dealer Transaction
//               </h5>
//               <div className="form-group row my-4">
//                 <div className="col-lg-6 px-4  col-md-6 col-sm-12">
//                   Dealer Name: <b>{dealer && dealer.company_name}</b>
//                 </div>
//                 <div className="col-lg-6 px-4 pr-1 col-md-6 col-sm-12 text-right">
//                 { dealer && dealer.credit_amount >=0 ? ( <>
//                   Credit Balance : Rs. <b>{dealer.credit_amount}</b>
//                                 </>):(<>Debit Balance : Rs. <b>{-(dealer.credit_amount)}</b></>) }
                  
//                 </div>
//               </div>

//               <div className="container mt-3 card p-3">
//                 <div className="row">
//                   <div className="col-12">
//                   <h4 className="mt-3 text-center ">New Transaction</h4>
//                   </div>
//                   <div className="d-flex  flex-column justify-content-center align-items-center ">
//                     <div className="mt-3  col-sm-12  form-group ">
//                       <div className="row d-flex justify-content-center align-items-center">

//                         <div className="col-3 mt-4"><span className="fw-bold">Date :</span></div>
//                         <div className="col-9 mt-4">
                 
//                           <Field style={{ border:"1px solid #b3b3b39d"}}
//                             className='p-1 rounded-3'
//                             name="date"
//                             type="date"
//                           />
//                           {errors.date && touched.date ? (
//                             <div className="help-block  text-danger">{errors.date}</div>
//                           ) : null}
//                         </div>
//                         <div className="col-3 mt-4 "><span className="fw-bold">Mode of Transaction : </span></div>
//                         <div className="col-9 mt-4">
//                         <Field
//                         type="text"
//                         name="mode"
//                         className={"form-control"}
//                         placeholder="Transaction mode"
//                       />
//                       {errors.mode && touched.mode ? (
//                         <div className="help-block text-danger">{errors.mode}</div>
//                       ) : null}
//                         </div>



//                         <div className="col-3 mt-4"><span className="fw-bold"> Amount of payment : </span></div>
//                         <div className=" mt-4 col-9">
//                         <Field
//                         type="text"
//                         name="payment"
//                         className={" form-control"}
//                         placeholder="Payment"
//                       />
//                       {errors.payment && touched.payment ? (
//                         <div className="help-block  text-danger">{errors.payment}</div>
//                       ) : null}
//                         </div>

//                         <div className="mt-3 text-center col-sm-12">
//                   <button type="submit" className="btn my-3 co" >
//                   SUBMIT
//               </button>
//                   </div>

//                       </div>
//                       </div>
//                     </div>
//                   </div>

//                 </div>

               



//               </div>
//           </Form>
//         )}
//       </Formik>
//     </React.Fragment>

//   )
// }




// import React from 'react';
// import {  useLocation} from "react-router-dom";

// export default function TransactionDetail() {
//     let Location = useLocation();
//     const data = Location.state;
    

//   return (
//       <>
     
//  <div className="col my-3">
//  <h5 className="alert co display-7  text-center">
//                Transaction Details
//               </h5>
//  <table className="table table-hover  border">
//        <thead>
//             <tr className="table-dark">
              
//               <th scope="col">S.No </th>
//               <th scope="col">Date</th>
//               <th scope="col">Mode</th>
              
//               <th scope="col">Payment</th>
//               <th scope="col">Transaction</th>
//               <th scope="col">Credit Balance</th>
              
             
//             </tr>
//           </thead>
            
//                  {data &&
//             data.map((subData ,index)=>(
//                     <tbody key={index}>
//                 <tr className=" pt-4 ">
                  
//                   <td className="fw-bold">{index +1}</td>
//                   <td className="fw-bold">{subData.date}</td>
                  
//                   <td className="fw-bold">{subData.mode}</td>
//                   <td className="fw-bold">{subData.payment}</td>
                  
                 
//                   <td className="fw-bold">{subData.before_transaction}</td>
                  
                 
//                   <td className="fw-bold">{subData.credit_balance}</td>
                  
                 
                  
//                   </tr>
//                   </tbody>

//               ))
            
                  
                  
//                   } 
            

//           </table>
//           </div>
      
//       </>
//   )
// }

