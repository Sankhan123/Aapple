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
        onSubmit={async (values) => {

          console.log(values);
          const email = values.email;
          const password = values.password;

          const response = await axios.get(`http://127.0.0.1:8000/api/getlogin/${email}/${password}`);

          console.log(response);

          if (response.data.status === 200) {
            if (response.data.data.user_status === "true") {

              if (response.data.data.user_role === "admin") {
                Navigate("/dashboard");
              }
              else {
                Navigate("/user-dashboard");
              }
            } else {
              alert("Sorry! Cannot login, please wait for admin approval or contact admin..");
            }
          }
          else {
            alert(response.data.message);
            Navigate("/login");
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            
            <div className="d-flex  flex-column justify-content-center align-items-center min-vh-100">
            <div className="card  p-2 " style={{width: 400}}>
              <div className="container">
              <h3 className="my-3 text-center ">LOG IN</h3>
                <div className="row">

               

                

                <div className="mt-3  col-sm-12  form-group  ">
               
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

              <div className="form-group  col-sm-12  mt-3 ">
               
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

                  <div className="mt-3  col-sm-12">
                  <button type="submit" className="btn my-3 co">
                LOG IN
              </button>
                  </div>
                  <div className="text-center py-3 fw-bold">
               <p>Don't have an account? <Link to="/register">Register</Link></p>
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

export default Login;
