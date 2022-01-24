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

export default  function Transaction() {
  // let Navigate = useNavigate();
  return (

    <React.Fragment>
      <Formik
        initialValues={{
          date: "",
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
            <div className="login-wrapper my-3 col">
              <h5 className="alert co display-7  text-center">
                Dealer Transaction
              </h5>
              <div className="form-group row my-4">
                <div className="col-lg-6 px-4 fw-bold col-md-6 col-sm-12">
                  Dealer Name:
                </div>
                <div className="col-lg-6 px-4 fw-bold pr-1 col-md-6 col-sm-12 text-right">
                  Credit Balance : Rs.________________
                </div>
              </div>

              <div className="container mt-3 card p-3">
                <div className="row">
                  <div className="col-12">
                  <h4 className="mt-3 text-center ">New Transaction</h4>
                  </div>
                  <div className="d-flex  flex-column justify-content-center align-items-center ">
                    <div className="mt-3  col-sm-12  form-group ">
                      <div className="row d-flex justify-content-center align-items-center">

                        <div className="col-3 mt-4"><span className="fw-bold">Date :</span></div>
                        <div className="col-9 mt-4">
                 
                          <Field style={{ border:"1px solid #b3b3b39d"}}
                            className='p-1 rounded-3'
                            name="date"
                            type="date"
                            defaultValue=""
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                          {errors.date && touched.date ? (
                            <div className="help-block  text-danger">{errors.date}</div>
                          ) : null}
                        </div>
                        <div className="col-3 mt-4 "><span className="fw-bold">Mode of Transaction : </span></div>
                        <div className="col-9 mt-4">
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



                        <div className="col-3 mt-4"><span className="fw-bold"> Amount of payment : </span></div>
                        <div className=" mt-4 col-9">
                        <Field
                        type="text"
                        name="payment"
                        className={" form-control"}
                        placeholder="Payment"
                      />
                      {errors.payment && touched.payment ? (
                        <div className="help-block  text-danger">{errors.payment}</div>
                      ) : null}
                        </div>

                        <div className="mt-3 text-center col-sm-12">
                  <button type="submit" className="btn my-3 co">
                  SUBMIT
              </button>
                  </div>

                      </div>
                      </div>
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



