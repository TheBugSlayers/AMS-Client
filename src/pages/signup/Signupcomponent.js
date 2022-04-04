import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { useFormik } from "formik";

import "./signinup.css";
export const Signupcomponent = (values) => {

  const errors = {};
  if (!values.image) {
      errors.image = 'Image is required';
  }
  if (!values.name) {
      errors.name = 'Name is required';
  } else if (values.name.length > 15) {
      errors.firstName = 'Name must be 15 characters or less';
  }

  if (!values.email) {
      errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
  }

  if (!values.phone) {
      errors.phone = "Phone No required!";
  } else if (!/^(\+91)?(-)?\s*?(91)?\s*?(\d{3})-?\s*?(\d{3})-?\s*?(\d{4})$/g.test(values.phone)) {
      errors.phone = "Invalid Phone No!";
  }

  if (!values.pass) {
      errors.pass = "Password is Required!";
  } else if (values.pass.length < 8) {
      errors.pass = "Password length must be atleast 8 characters!";
  } else if (values.pass.length > 15) {
      errors.pass = "Password length must not exceed 15 characters!";
  } else if (!values.cpass) {
      errors.cpass = "Confirm Your Password First!";
  } else if (values.pass !== values.cpass) {
      errors.cpass = "Password Not Match!";
  }

  return errors;
};

function Form() {
  const [imageName, setImageName] = useState("");
  const formik = useFormik({
      initialValues: {
          name: '',
          email: '',
          phone: '',
          image: '',
          pass: '',
          cpass: ''
      },
      validate,
    
  })
 
  const onImageChange = (event) => {
      if (event.currentTarget.files && event.currentTarget.files[0]) {
          setImageName(event.currentTarget.files[0].name);
          const reader = new FileReader();
          reader.readAsDataURL(event.currentTarget.files[0]);
          reader.onload = () => {
              formik.setFieldValue(
                  "image",
                  reader.result.toString()
              );
          }
          reader.onerror = error => console.log(error);
      }
  }
  return (
    <form className="form" onSubmit={formik.handleSubmit} onReset={handleReset}> 
      <h3 className="d-flex justify-content-start">Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>

      <div className="form-group">
        <label> Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <label>Role</label>
      <div className="mb-2">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
    </form>
  );
};
