import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

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
              To <a href="./login">Login</a>
            </p>
          </div>
          <Form className="form-container">
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
                name="Company-name"
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
                name="gstNumber"
                className="form-control"
                placeholder="GST-number"
              />
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="Contact-person-name">
                Contact Person Name <span className="text-danger">*</span>
              </label>
              <Field
                type="text"
                name="Contact-person-name"
                className="form-control"
                placeholder="Contact-person-name"
              />
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="Address">Address</label>
              <Field
                type="text"
                name="Address"
                className="form-control"
                placeholder="Address"
              />
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="District">District</label>
              <Field
                type="text"
                name="District"
                className="form-control"
                placeholder="District"
              />
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="State">State</label>
              <Field
                type="text"
                name="State"
                className="form-control"
                placeholder="State"
              />
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="Zip">Zip</label>
              <Field
                type="text"
                name="Zip"
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
                name="Phone-number"
                className="form-control"
                placeholder="Phone-number"
              />
            </div>
            <div className="form-group  mt-3 ">
              <label htmlFor="Alternate-number">Alternate Phone Number</label>
              <Field
                type="text"
                name="Alternate-number"
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
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),
  handleSubmit: (values) => {
    console.log(values);
    const REST_API_URL = "REST_API_URL";
    fetch(REST_API_URL, {
      method: "post",
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // HANDLE ERROR
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        // HANDLE RESPONSE DATA
        console.log(data);
      })
      .catch((error) => {
        // HANDLE ERROR
        console.log(error);
      });
  },
})(RegisterPage);
export default Register;
