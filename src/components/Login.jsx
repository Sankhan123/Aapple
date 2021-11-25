import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom"
const LoginPage = (props) => {
  const loginPageStyle = {
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
        <div className="login-wrapper" style={loginPageStyle}>
          <h2>Login Page</h2>
          <div>
            <p>
              To <Link to="/register">Register</Link>
            </p>
          </div>
          <Form className="form-container">
            <div className="form-group mt-3 ">
              <label htmlFor="email">
                Email <span className="text-danger">*</span>
              </label>
              <Field
                type="text"
                name="email"
                className={" form-control"}
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
                className={" form-control"}
                placeholder="Password"
              />
              {touched.password && errors.password && (
                <span className="help-block text-danger">
                  {errors.password}
                </span>
              )}
            </div>
            <button type="submit" className="btn mt-3 btn-primary">
              Login
            </button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

const Login = withFormik({
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
    const REST_API_URL = "http://localhost/Aapple/aapple-php/api/login.php";
  
    axios({
      method: 'post',
      url: REST_API_URL,
      data: {
        ...values
      },
      config: { headers: {'Content-Type': 'application/json' }}
  })
      .then((response,props) => {
        // HANDLE RESPONSE DATA
        console.log(response);
      

          (response.data.status==="ok")? alert(response.data.message) : alert(response.data.message)
        
      })
      .catch((error) => {
        // HANDLE ERROR
        console.log(error);
      });
  },
})(LoginPage);

export default Login;
