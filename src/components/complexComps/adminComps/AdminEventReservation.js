import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEvents } from "../../../redux/action-creaters";
import vector from "../../../utils/static/images/Vector.png";
import style from "./AdminEventReservation.module.css";
const AdminEventReservation = () => {
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.admin.eventList);
  useEffect(() => {
    dispatch(fetchAllEvents());
  }, []);
  return (
    <div className={style.AdminEventReservation}>
      <div>
        <div className="text-md-left">
          <h4>Event Reservation</h4>
          <div className="input-group">
            <div className="form-outline">
              <input
                type="search"
                id="form1"
                placeholder="search"
                className="form-control"
              />
            </div>
            <button type="button" className="btn btn-primary">
              Name
              <img src={vector} alt="vectorImage" />
            </button>
          </div>
        </div>
      </div>
      <table
        id="example"
        className="table table-striped"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th>Event name</th>
            <th>Category</th>
            <th>Date </th>
            <th>City</th>
            <th>Event time</th>
            <th>Booked by</th>
            <th>Ticket price</th>
            <th>Total cost</th>
          </tr>
        </thead>
        <tbody>
          {eventList.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.event_name}</td>
                <td>{item.category}</td>
                <td>{item.event_date}</td>
                <td>{item.city}</td>
                <td>{item.event_time}</td>
                <td>{item.bookedBy[0].name}</td>
                <td>{item.ticket_price}</td>
                <td>{item.total_cost}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminEventReservation;
