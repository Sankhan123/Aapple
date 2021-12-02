import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

const SigninSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Too Short! Password must be atleast 6 characters")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

function Transaction() {
    let Navigate = useNavigate();
    return (

        <React.Fragment>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          console.log(values);
          const REST_API_URL =
            "http://localhost/Aapple/aapple-php/api/login.php";

          axios({
            method: "post",
            url: REST_API_URL,
            data: {
              ...values,
            },
            config: { headers: { "Content-Type": "application/json" } },
          })
            .then((response, props) => {
              // HANDLE RESPONSE DATA
              console.log(response);
              if (response.data.status === "ok") {
                if (response.data.role === "admin") {
                  Navigate("/dashboard");
                } else if(response.data.role === "user") {
                  Navigate("/user-dashboard");
                }
              } else {
                alert(response.data.message);
                Navigate("/");
              }
            })
            .catch((error) => {
              // HANDLE ERROR
              console.log(error);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="login-wrapper">
            <h5 className="alert alert-primary display-7 fw-normal text-center">
            Dealer Transaction
            </h5>
            <div className="container mt-2 card p-3">
            <h4 className="text-center">New Transaction</h4>
            <div className="form-group">

            <div className="form-group row mb-3 mt-2">
            <label htmlFor="email" className="col-lg-2">Date :</label>
            <div className="col-lg-4">
            <Field
                type="text"
                name="email"
                className={" form-control"}
                placeholder="Email"
                />
                {errors.email && touched.email ? (
                <div className="help-block text-danger">{errors.email}</div>
                ) : null}
            </div>
            <label htmlFor="email" className="col-lg-2">
                  Pay(Rs.) :
                </label>
            <div className="col-lg-4">
            <Field
                type="text"
                name="email"
                className={" form-control"}
                placeholder="Email"
                />
                {errors.email && touched.email ? (
                <div className="help-block text-danger">{errors.email}</div>
                ) : null}
            </div>
              </div>

              <div className="form-group row mb-3 mt-2">
            <label htmlFor="email" className="col-lg-2">Mode of Transaction:</label>
            <div className="col-lg-4">
            <Field
                type="text"
                name="email"
                className={" form-control"}
                placeholder="Email"
                />
                {errors.email && touched.email ? (
                <div className="help-block text-danger">{errors.email}</div>
                ) : null}
            </div>
            <label htmlFor="email" className="col-lg-2">
                  Credit Balance : 
                </label>
            <div className="col-lg-4">
            <Field
                type="text"
                name="email"
                className={" form-control"}
                placeholder="Email"
                />
                {errors.email && touched.email ? (
                <div className="help-block text-danger">{errors.email}</div>
                ) : null}
            </div>
              </div>



              <div className="text-right">
              <button type="submit" className="btn mt-3 btn-primary ">
                Submit
              </button>
              </div>
            </div>
            </div>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
        
    )
}

export default Transaction;
