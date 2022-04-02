import React from 'react'
import style from './ManagerAudiEdit.module.css'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import image from '../../../utils/static/images/Rectangle 4142.png'

function ManagerAudiEdit() {
    return (
        <div style={{ marginTop: 60, width: '100%', textAlign:'left' }}>
            <div >
                <div className={style.topUpdate}>
                    <h2>Update Details</h2>
                    <Link to='/manager/auditorium'><button class="btn btn-primary">Save</button></Link>
                </div>
                <hr />
            </div>
            <div className={style.editinfo}>
                <div>
                    <div>
                        <p>Auditorium Name</p>
                        <input type='text' placeholder='Placeholder'/>
                    </div>
                    <div>
                        <p>City</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="default" id="dropdown-basic">
                                New York
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Capacity</p>
                        <input type='text' placeholder='Placeholder'/>
                    </div>
                    <div>
                        <p>Address</p>
                        <p style={{maxWidth: 310}}>28 Wall Avenue, Las Cruces,nm, 88001
                            United States</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Cost/Hour</p>
                        <input type='text' placeholder='Placeholder'/>
                    </div>
                    <div>
                        <p>Description</p>
                        <p style={{maxWidth: 310}}>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Enim maecenas sagittis,
                            semper vestibulum mauris. Faucibus donec </p>
                    </div>
                </div>
            </div>

            <b>Images</b>

            <div className={style.images}>
                <img style={{height:200}} alt='' src={image}/>
                <img style={{height:200}} alt='' src={image}/>
                <img style={{height:200}} alt='' src={image}/>

            </div>
            <br/>

        </div>
    )
}

export default ManagerAudiEdit