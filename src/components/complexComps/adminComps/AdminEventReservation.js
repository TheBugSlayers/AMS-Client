import React from 'react'
import vector from '../../../utils/static/images/Vector.png';
import style from './AdminEventReservation.module.css';
const AdminEventReservation = () => {
    return (
        <div className={style.AdminEventReservation}>
            <div>
                <div className='text-md-left'>
                    <h4>Event Reservation</h4>
                    <div className="input-group">
                        <div className="form-outline">
                            <input type="search" id="form1" placeholder='SEARCH' className="form-control" />
                        </div>
                        <button type="button" className="btn btn-primary">
                            Name
                            <img src={vector} />
                        </button>
                    </div>
                </div>
            </div>
            <table id="example" className="table table-striped" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Event name</th>
                        <th>Auditorium Name</th>
                        <th>Category</th>
                        <th>Date </th>
                        <th>City</th>
                        <th>Event time</th>
                        <th>Time Slots</th>
                        <th>Booked by</th>
                        <th>Ticket price</th>
                        <th>Total cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jon Doe</td>
                        <td>Apple theatre</td>
                        <td>Music</td>
                        <td>24/02/22</td>
                        <td>New York</td>
                        <td>11:30</td>
                        <td>3</td>
                        <td>Jon Doe</td>
                        <td>200</td>
                        <td>200000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AdminEventReservation