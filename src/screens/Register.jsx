import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import REACT_APP_API_URL from "../assets/header/env";

const SignupSchema = Yup.object().shape({
  gst_number: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Too Short! Password must be atleast 6 characters")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  contact_person: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  aadhaar_number: Yup.string()
  .required("Required"),
});

const Register = () => {
  let Navigate = useNavigate();
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: "",
          password: "",
          contact_person: "",
          gst_number: "",
          phone: "",
          company_name: "",
          address: "",
          district: "",
          city: "",
          state: "",
          zip: "",
          alternate_number: "",
          aadhaar_number: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(
              `${REACT_APP_API_URL}/dealer-register`,
              values
            );
            if (response.data.status === 200) {
              alert(response.data.message);
              Navigate("/login");
            }
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="d-flex  flex-column justify-content-center align-items-center min-vh-100">
              <div className="container">
                <div className="row">
                  <div className="d-flex justify-content-center flex-column text-center">
                    <h3 className="my-3 ">Register Page</h3>

                    <div className="row">
                      <div className="mt-3 col-md-6 col-sm-12 col-lg-6 form-group ">
                        <div>
                          <Field
                            type="text"
                            name="email"
                            className={" form-control"}
                            placeholder="Email *"
                          />
                          {errors.email && touched.email ? (
                            <div className="help-block text-danger">
                              {errors.email}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="mt-3 col-md-6 col-sm-12 col-lg-6 form-group ">
                        <Field
                          type="text"
                          name="address"
                          className={" form-control"}
                          placeholder="Address"
                        />
                      </div>

                      <div className="mt-3 col-md-6 col-sm-12 col-lg-6 form-group  ">
                        <Field
                          type="password"
                          name="password"
                          className={" form-control"}
                          placeholder="Password *"
                        />
                        {errors.password && touched.password ? (
                          <div className="help-block text-danger">
                            {errors.password}
                          </div>
                        ) : null}
                      </div>

                      <div className="mt-3 col-md-6 col-sm-12 col-lg-6 form-group">
                        <Field
                          type="text"
                          name="city"
                          className={" form-control"}
                          placeholder="City "
                        />
                      </div>

                      <div className="mt-3 col-md-6 col-sm-12 col-lg-6 form-group">
                        <Field
                          type="text"
                          name="company_name"
                          className={" form-control"}
                          placeholder="Company Name"
                        />
                      </div>

                      <div className="mt-3 col-md-6 col-sm-12 col-lg-6 form-group ">
                        <Field
                          type="text"
                          name="district"
                          className={" form-control"}
                          placeholder="District"
                        />
                      </div>

                      <div className="mt-3 col-md-6 col-sm-12 col-lg-6 form-group">
                        <Field
                          type="text"
                          name="contact_person"
                          className=" form-control"
                          placeholder="Contact Person Name *"
                        />
                        {touched.contact_person && errors.contact_person && (
                          <span className="help-block text-danger">
                            {errors.contact_person}
                          </span>
                        )}
                      </div>

                      <div className="mt-3 col-md-6 col-sm-12 col-lg-6 form-group">
                        <Field
                          type="text"
                          name="state"
                          className={" form-control"}
                          placeholder="State"
                        />
                      </div>

                      <div className="mt-3 col-md-6 col-sm-12 col-lg-6 form-group">
                        <Field
                          type="text"
                          name="gst_number"
                          className=" form-control"
                          placeholder="GST Number *"
                        />
                        {errors.gst_number && touched.gst_number ? (
                          <div className="help-block text-danger">
                            {errors.gst_number}
                          </div>
                        ) : null}
                      </div>

                      <div className="mt-3 col-md-6 col-sm-12 col-lg-6 form-group">
                        <Field
                          type="text"
                          name="zip"
                          className={" form-control"}
                          placeholder="Zip"
                        />
                      </div>

                      <div className="mt-3 col-md-6 col-sm-12 col-lg-6 form-group ">
                        <Field
                          type="number"
                          name="phone"
                          className="form-control"
                          placeholder="Contact Number *"
                        />
                        {touched.phone && errors.phone && (
                          <span className="help-block text-danger">
                            {errors.phone}
                          </span>
                        )}
                      </div>

                      <div className="mt-3 col-md-6 col-sm-12 col-lg-6 form-group">
                        <Field
                          type="number"
                          name="alternate_number"
                          className={"form-control"}
                          placeholder="Alternate Number"
                        />
                      </div>

                      <div className="mt-3 col-md-6 col-sm-12 col-lg-6 form-group">
                        <Field
                          type="text"
                          name="aadhaar_number"
                          className={"form-control"}
                          placeholder="Aadhaar Number *"
                        />
                        {errors.aadhaar_number && touched.aadhaar_number ? (
                          <div className="help-block text-danger">
                            {errors.aadhaar_number}
                          </div>
                        ) : null}
                      </div>

                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="fw-bold wit  btn mt-3 co"
                        >
                          Register
                        </button>
                      </div>

                      <div className="text-center py-3 fw-bold">
                        <p>
                          Already have an account?{" "}
                          <Link to="/login"> Login</Link>
                        </p>
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
  );
};

export default Register;
