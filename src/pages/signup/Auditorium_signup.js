import React from "react";
import { Dropdown } from "react-bootstrap";
// import "./userlogin.css";
import "./Auditorium_signup.css";
const Auditorium_signup = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h3>Sign Up</h3>

        <div className="container ">
          <div className="d-flex justify-content-around">
            <div>
              <div className="form-group mt-1">
                <label>Auditorium name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add Auditorium name"
                />
              </div>
              <div className="form-group">
                <label> Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <label>Role</label>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div>
              <h5>Auditorium details</h5>
              <div className="form-group">
                <label>Auditorium name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Auditorium name"
                />
              </div>

              {/* <div className="form-group">
                <label> Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div> */}
              <div className="d-flex">
                <div className="form-group">
                  <label> Capacity</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Cost/hr</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cost/hr"
                  />
                </div>
              </div>
              <div className="d-flex">
                <div form-group>
                  <label for="exampleFormControlTextarea1">Adress</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Enter adress"
                  ></textarea>
                </div>
                <div className="align-self-end">
                  <button type="button" name="image" className="btn btn-block ">
                    Photo +
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea2">Description</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  placeholder="Add some description"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
              <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auditorium_signup;
