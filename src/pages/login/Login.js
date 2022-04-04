import React from "react";
import "./signinup.css";
import { useFormik } from "formik";
import { validate } from "../../helpers/formValidations";
import { login } from "../../redux/action-creaters";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      dispatch(
        login({
          email: values.email,
          password: values.password,
        })
      );
    
      formik.resetForm();
    },
  });
  return (
    <>
      <h1 className="text-center mt-5 ">Login</h1>
      <div className="row d-flex justify-content-center mt-3">
        <div className="col-3 bg-light ">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.email && formik.errors.email
                    ? "form-control formInput errorFormInput"
                    : "form-control formInput"
                } />
              {formik.touched.email && formik.errors.email ? (
                <div className="errorsWrapper">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input type="password" id="password" name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.password && formik.errors.password
                    ? "form-control formInput errorFormInput"
                    : "form-control formInput"
                }
                 />
              {formik.touched.password && formik.errors.password ? (
                <div className="errorsWrapper">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="row mb-4">
              {/* <div class="col d-flex justify-content-center">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                    checked={true}
                  />
                  <label class="form-check-label" htmlFor="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div> */}

              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <input type="submit" style={{color: "blue"}}  value="Sign In" className="btn btn-primary btn-block mb-4" />
             

            <div className="text-center">
              <p>
                Not a member? <a href="#">Register</a>
              </p>
            
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

// export default class Login extends Component {
//   render() {
//     return (

//     );
//   }
// }
