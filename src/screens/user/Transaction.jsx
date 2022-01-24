import React from "react";
import { Formik, Form, Field } from "formik";
// import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

const SigninSchema = Yup.object().shape({
  mode: Yup.string()
    .required("Required"),
    date: Yup.string()
    .required("Required"),
  payment: Yup.number().required("Required").min(0, 'Min value 0.'),
});

function Transaction() {
  // let Navigate = useNavigate();
  return (

    <React.Fragment>
      <Formik
        initialValues={{
          date:"",
          mode: "",
          payment: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          console.log(values);
          const REST_API_URL =
            "http://localhost/Aapple/aapple-php/api/dealertransactions.php";

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

            })
            .catch((error) => {
              // HANDLE ERROR
              console.log(error);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="login-wrapper col">
              <h5 className="alert alert-primary display-7 fw-normal text-center">
                Dealer Transaction
              </h5>
              <div className="form-group row">
                <div className="col-lg-6">
                  Dealer Name:
                </div>
                <div className="col-lg-6 text-right">
                  Credit Balance : Rs.________________
                </div>
              </div>
              <div className="container mt-2 card p-3">
                <h5 className="text-center">New Transaction</h5>
                <div className="form-group">

                  <div className="form-group row mb-3 mt-2 text-right">

                    <div className="col-lg-8">
                    </div>
                    <label htmlFor="date" className="col-lg-2">Date :</label>
                    <div className="col-lg-2">
                      <Field
                        name="date"
                        type="date"
                        defaultValue=""
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      {errors.date && touched.date ? (
                        <div className="help-block text-danger">{errors.date}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="form-group row mb-3 mt-2">
                    <label htmlFor="Mode" className="col-lg-2">Mode of Transaction:</label>
                    <div className="col-lg-4">
                      <Field
                        type="text"
                        name="mode"
                        className={"form-control"}
                        placeholder="Transaction mode"
                      />
                      {errors.mode && touched.mode ? (
                        <div className="help-block text-danger">{errors.mode}</div>
                      ) : null}
                    </div>
                    <label htmlFor="payment" className="col-lg-2">
                      Amount of payment :
                    </label>
                    <div className="col-lg-4">
                      <Field
                        type="text"
                        name="payment"
                        className={" form-control"}
                        placeholder="Payment"
                      />
                      {errors.payment && touched.payment ? (
                        <div className="help-block text-danger">{errors.payment}</div>
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
