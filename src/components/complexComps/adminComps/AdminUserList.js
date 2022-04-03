import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { adminToken, fetchAllUsers } from "../../../redux/action-creaters";
import style from "./AdminUserList.module.css";

const AdminUserList = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.admin.userList);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  const handleRemoveReq = (e, userId) => {
    // dispatch(acceptManagerReq(managerId, event));

    fetch(`https://auditoriaserver.herokuapp.com/admin/removeUser/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + adminToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          console.log(data.error);
        } else {
          console.log({
            msg: "Delete Successfully",
          });
          dispatch(fetchAllUsers());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={style.AdminUserList}>
      <div className="text-md-left" style={{ textAlign: "left" }}>
        <h4>User List</h4>
        <Dropdown>
          <Dropdown.Toggle variant="default" id="dropdown-basic">
            --Select Role--
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <table
        id="example"
        className="table table-striped"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((item, id) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.role}</td>
                <td>
                  <div className={style.buttons}>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={(e) => {
                        handleRemoveReq(e, item._id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserList;
