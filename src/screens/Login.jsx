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
const loginPageStyle = {
  margin: "32px auto 37px",
  maxWidth: "530px",
  background: "#fff",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
};
const Login = () => {
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
            <div className="login-wrapper" style={loginPageStyle}>
              <h2>Login Page</h2>
              <div>
                <p>
                  To <Link to="/register">Register</Link>
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
              <button type="submit" className="btn mt-3 btn-primary">
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default Login;
