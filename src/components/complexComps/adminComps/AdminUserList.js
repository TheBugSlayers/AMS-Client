import React from 'react'
import { Dropdown } from 'react-bootstrap';
import style from './AdminUserList.module.css';

const AdminUserList = () => {
    return (
        <div className={style.AdminUserList}>
                <div className='text-md-left' style={{ textAlign: 'left' }}>
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
                <table id="example" className="table table-striped" style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Contact No</th>
                            <th>age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jon Doe</td>
                            <td>jondoe@mail.com</td>
                            <td>9865652365</td>
                            <td>24</td>
                            <td>
                                <div className={style.buttons}>
                                    <button type="button" className="btn btn-outline-danger">Remove</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>


        

        </div>
    )
}

export default AdminUserList