import React from 'react'
import style from './OrganizerMyEvents.module.css'
import vector from '../../../utils/static/images/Vector.png'
import { Link } from 'react-router-dom'


function OrganizerMyEvents() {
    return (
        <div style={{ width: '100%' }}>
            <div className={style.topbreadcrum}>
                <a href='' >My Events</a>
                <a href='' >Event Details</a>
                <a href='' >Cutomer List</a>
            </div>


            <div className={style.ManagerRecentRequests}>
                <div className='text-md-left'>
                    <h2>My Events</h2>
                    <div className="input-group">
                        <div className="form-outline">
                            <input type="search" id="form1" placeholder='search' className="form-control" />
                        </div>
                        <button type="button" className="btn btn-primary">
                            <div>
                                Name
                                <img src={vector} alt="" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <table id={style.RecentRequestsTable} className="table table-striped"
                style={{ width: '95%', textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>Event name</th>
                        <th>Auditorium name</th>
                        <th>City</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Total
                            customers</th>
                        <th>Total Cost</th>

                        <th>Description</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dmask: The Truth</td>
                        <td>Apple theatre</td>
                        <td>New York</td>
                        <td>23/5/2022</td>
                        <td>Music</td>
                        <td>30</td>
                        <td>30000</td>

                        <td>Lorem ipsum dolor sit amet
                            Lorem ipsum dolor sit</td>
                        <td>
                            <div className={style.buttons}>
                                <Link to='./detailview' ><button type="button" className="btn btn-outline-primary">Edit</button></Link>
                            </div>
                        </td>

                    </tr>

                </tbody>
            </table>


        </div>
    )
}

export default OrganizerMyEvents