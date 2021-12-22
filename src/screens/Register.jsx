import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
const SignupSchema = Yup.object().shape({
  gst_number: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Too Short! Password must be atleast 6 characters")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  contact_person: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
});
const RegisterPageStyle = {
  margin: "32px auto 37px",
  maxWidth: "530px",
  background: "#fff",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
};
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
        }}
        validationSchema={SignupSchema}
        onSubmit={async(values) => {
          console.log(values);
          const response =await axios.post('http://127.0.0.1:8000/api/dealer-register',values);
            
              // HANDLE RESPONSE DATA
              //console.log(response);
              if (response.data.status === 200) {
                alert(response.data.message);
               // console.log(response.data.message);
                Navigate("/login");
              }else{
                alert("Something went wrong");
              }
         
        }} 
      >
        {({ errors, touched }) => (
          <Form>
            <div className="login-wrapper" style={RegisterPageStyle}>
              <h2>Register Page</h2>
              <div>
                <p>
                  To <Link to="/login">Login</Link>
                </p>
              </div>
              <div className="form-group mt-3 ">
                <label htmlFor="email">
                  Email <span className="text-danger">*</span>
                </label>
                <div>
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
              <div className="form-group  mt-3 ">
                <label htmlFor="password">
                  Password <span className="text-danger">*</span>
                </label>
                <Field
                  type="password"
                  name="password"
                  className={" form-control"}
                  placeholder="Password"
                />
                {errors.password && touched.password ? (
                  <div className="help-block text-danger">
                    {errors.password}
                  </div>
                ) : null}
              </div>
              <div className="form-group  mt-3 ">
                <label htmlFor="companyName">Company Name</label>
                <Field
                  type="text"
                  name="company_name"
                  className={" form-control"}
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group  mt-3 ">
                <label htmlFor="gstNumber">
                  GST Number <span className="text-danger">*</span>
                </label>
                <Field
                  type="text"
                  name="gst_number"
                  className=" form-control"
                  placeholder="GST Number"
                />
                {errors.gst_number && touched.gst_number ? (
                  <div className="help-block text-danger">
                    {errors.gst_number}
                  </div>
                ) : null}
              </div>
              <div className="form-group  mt-3 ">
                <label htmlFor="contactPerson">
                  Contact Person Name <span className="text-danger">*</span>
                </label>
                <Field
                  type="text"
                  name="contact_person"
                  className=" form-control"
                  placeholder="Contact Person Name"
                />
                {touched.contact_person && errors.contact_person && (
                  <span className="help-block text-danger">
                    {errors.contact_person}
                  </span>
                )}
              </div>
              <div className="form-group  mt-3 ">
                <label htmlFor="address">Address</label>
                <Field
                  type="text"
                  name="address"
                  className={" form-control"}
                  placeholder="Address"
                />
              </div>
              <div className="form-group  mt-3 ">
                <label htmlFor="district">District</label>
                <Field
                  type="text"
                  name="district"
                  className={" form-control"}
                  placeholder="District"
                />
              </div>
              <div className="form-group  mt-3 ">
                <label htmlFor="city">City</label>
                <Field
                  type="text"
                  name="city"
                  className={" form-control"}
                  placeholder="City"
                />
              </div>
              <div className="form-group  mt-3 ">
                <label htmlFor="state">State</label>
                <Field
                  type="text"
                  name="state"
                  className={" form-control"}
                  placeholder="State"
                />
              </div>
              <div className="form-group  mt-3 ">
                <label htmlFor="zip">Zip</label>
                <Field
                  type="text"
                  name="zip"
                  className={" form-control"}
                  placeholder="Zip"
                />
              </div>
              <div className="form-group  mt-3 ">
                <label htmlFor="contactNumber">
                  Contact Number <span className="text-danger">*</span>
                </label>
                <Field
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Contact Number"
                />
                {touched.phone && errors.phone && (
                  <span className="help-block text-danger">{errors.phone}</span>
                )}
              </div>
              <div className="form-group  mt-3 ">
                <label htmlFor="alternateNumber">Alternate Number</label>
                <Field
                  type="text"
                  name="alternate_number"
                  className={"form-control"}
                  placeholder="Alternate Number"
                />
              </div>
              <button type="submit" className="btn mt-3 btn-primary">
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default Register;