import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom"


  
const RegisterPage = (props) => {
  const RegisterPageStyle = {
    margin: "32px auto 37px",
    maxWidth: "530px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
  };
 
  const { touched, errors } = props;
  return (
    <React.Fragment>
      <div className="container">
        <div className="Register-wrapper" style={RegisterPageStyle}>
          <h2>Register Page</h2>
          <div>
            <p>
              To <Link to="/login">Login</Link>
            </p>
          </div>
          <Form className="form-container" method="post">
            <div className="form-group mt-3 ">
              <label htmlFor="email">
                Email Address <span className="text-danger">*</span>
              </label>
              <Field
                type="text"
                name="email"
                className="form-control"
                placeholder="Email"
              />
              {touched.email && errors.email && (
                <span className="help-block text-danger">{errors.email}</span>
              )}
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="password">
                Password <span className="text-danger">*</span>
              </label>
              <Field
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
              />
              {touched.password && errors.password && (
                <span className="help-block text-danger">
                  {errors.password}
                </span>
              )}
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="Company-name">Company Name</label>
              <Field
                type="text"
                name="company_name"
                className="form-control"
                placeholder="Company-name"
              />
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="gstNumber">
                GST Number <span className="text-danger">*</span>
              </label>
              <Field
                type="text"
                name="gst_number"
                className="form-control"
                placeholder="GST-number"
              /> {touched.gst_number && errors.gst_number && (
                <span className="help-block text-danger">
                  {errors.gst_number}
                </span>
              )}
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="Contact-person-name">
                Contact Person Name <span className="text-danger">*</span>
              </label>
              <Field
                type="text"
                name="contact_person"
                className="form-control"
                placeholder="Contact-person-name"
              /> {touched.contact_person && errors.contact_person && (
                <span className="help-block text-danger">
                  {errors.contact_person}
                </span>
              )}
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="Address">Address</label>
              <Field
                type="text"
                name="address"
                className="form-control"
                placeholder="Address"
              />
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="City">City</label>
              <Field
                type="text"
                name="city"
                className="form-control"
                placeholder="City"
              />
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="District">District</label>
              <Field
                type="text"
                name="district"
                className="form-control"
                placeholder="District"
              />
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="State">State</label>
              <Field
                type="text"
                name="state"
                className="form-control"
                placeholder="State"
              />
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="Zip">Zip</label>
              <Field
                type="text"
                name="zip"
                className="form-control"
                placeholder="Zip"
              />
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="Phone-number">
                Phone Number <span className="text-danger">*</span>
              </label>
              <Field
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone-number"
              /> {touched.phone && errors.phone && (
                <span className="help-block text-danger">
                  {errors.phone}
                </span>
              )}
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="Alternate-number">Alternate Phone Number</label>
              <Field
                type="text"
                name="alternate_number"
                className="form-control"
                placeholder="Alternate-number"
              />
            </div>
            <button type="submit" className="btn mt-3 btn-primary">
              Register
            </button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

const Register = withFormik({
  
  mapPropsToValues: (props) => {
    return {
      email: props.email || "",
      password: props.password || "",
      gst_number: props.gst_number || "",
      contact_person : props.contact_person || "",
      phone : props.phone || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string().required("Password is required"),
    gst_number: Yup.string().required("GST number is required"),
    contact_person: Yup.string().required("Contact Number is required"),
    phone: Yup.string().required("phone Number is required"),
  }),

  handleSubmit: (values) => {
    console.log(values);
    const REST_API_URL = "http://localhost/Aapple/aapple-php/api/register.php";
    axios({
        method: 'post',
        url: REST_API_URL,
        data: {
          ...values
        },
        config: { headers: {'Content-Type': 'application/json' }}
    })
    .then(function (response) {
      console.log(response);
      alert(response.data.message);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  },
})(RegisterPage);
export default Register;
