import React, { useEffect } from "react";
import style from "./AdminRecentRequests.module.css";
import vector from "../../../utils/static/images/Vector.png";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptManagerReq,
  adminToken,
  getManagerPendingReqs,
  getManagerReqStatus,
  rejectManagerReq,
} from "../../../redux/action-creaters";

const AdminRecentRequests = () => {
  const dispatch = useDispatch();
  const managerRequests = useSelector((state) => state.admin.managerRequests);
  useEffect(() => {
    dispatch(getManagerPendingReqs());
  }, []);
  console.log(managerRequests);
  const handleAccReq = (e, managerId) => {
    // dispatch(acceptManagerReq(managerId, event));

    fetch("https://auditoriaserver.herokuapp.com/admin/setManagerStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + adminToken,
      },
      body: JSON.stringify({
        managerId: managerId,
        verificationStatus: "true",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          console.log(data.error);
        } else {
          console.log({
            msg: "Update Successfully",
          });
          dispatch(getManagerPendingReqs());
          dispatch(getManagerReqStatus());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRejectReq = (event, managerId) => {
    // dispatch(rejectManagerReq(managerId));
    event.preventDefault();

    fetch("https://auditoriaserver.herokuapp.com/admin/setManagerStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + adminToken,
      },
      body: JSON.stringify({
        managerId: managerId,
        verificationStatus: "false",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log({
            msg: "Reject Successfully",
          });
          dispatch(getManagerPendingReqs());
          dispatch(getManagerReqStatus());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className={style.AdminRecentRequests}>
        <div className="text-md-left">
          <h2>Recent Requests</h2>
          <div className="input-group">
            <div className="form-outline">
              <input
                type="search"
                id="form1"
                placeholder="search"
                className="form-control"
              />
            </div>
            <button
              type="button"
              id={style.AdminSearchButton}
              className="btn btn-primary"
            >
              <div>
                Name
                <img src={vector} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <table
        id={style.RecentRequestsTable}
        className="table table-striped"
        style={{ width: "90%" }}
      >
        <thead>
          <tr>
            <th>Manager Name</th>
            <th>Auditorium Name</th>
            <th>Manager Contact</th>
            <th>Capacity</th>
            <th>Cost/hr</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {managerRequests.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.auditorium[0].auditoriumName}</td>
                <td>{item.contact}</td>
                <td>{item.auditorium[0].capacity}</td>
                <td>{item.auditorium[0].costPerHour}</td>
                <td>{item.auditorium[0].city}</td>
                <td>
                  <div className={style.buttons}>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={(event) => {
                        handleAccReq(event, item._id);
                      }}
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={(event) => {
                        handleRejectReq(event, item._id);
                      }}
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AdminRecentRequests;
