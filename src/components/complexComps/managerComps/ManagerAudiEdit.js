import React from 'react'
import style from './ManagerAudiEdit.module.css'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import image from '../../../utils/static/images/Rectangle 4142.png'
import LayoutWrapper from '../../styleComps/Wrapper/LayoutWrapper';

function ManagerAudiEdit() {
    return (
        <LayoutWrapper>
            <div className={style.card}>

                <div >
                    <div className={style.topUpdate}>
                        <h2>Update Details</h2>
                        <Link to='/manager/auditorium'><button class="btn btn-primary">Save</button></Link>
                    </div>
                    <hr style={{ width: "100%" }} />
                </div>
                <div className={style.editinfo}>
                    <div className={style.colspace}>
                        <div>
                            <div className={style.contentHeader}>Auditorium Name</div>
                            <input className={style.textInput} type='text' placeholder='Placeholder' />
                        </div>
                        <div>
                            <div className={style.contentHeader}>City</div>

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

                    <div className={style.colspace}>
                        <div>
                            <div className={style.contentHeader}>Capacity</div>
                            <input className={style.textInput} type='text' placeholder='Placeholder' />
                        </div>
                        <div>
                            <div className={style.contentHeader}>Address</div>
                            <input className={style.textInput} type='text' style={{ maxWidth: 310 }} value="28 Wall Avenue, Las Cruces,nm, 88001
                                United States"/>
                        </div>
                    </div>
                    <div className={style.colspace}>
                        <div>
                            <div className={style.contentHeader}>Cost/Hour</div>
                            <input className={style.textInput} type='text' placeholder='Placeholder' />
                        </div>
                        <div>
                            <div className={style.contentHeader}>Description</div>
                            <textarea className={style.textInput} type='text' style={{ maxWidth: 310 }} value="Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Enim maecenas sagittis,
                                semper vestibulum mauris. Faucibus donec"/>
                            {/* <p style={{ maxWidth: 310 }}> </p> */}
                        </div>
                    </div>
                </div>

                <div className={style.contentHeader}>Images</div>
                <div className={style.images}>
                    <img style={{ height: 200, width: "32%"}} alt='' src={image} />
                    <img style={{ height: 200, width: "32%" }} alt='' src={image} />
                    <img style={{ height: 200, width: "32%" }} alt='' src={image} />

                </div>
                <br />
            </div>
        </LayoutWrapper>
    )
}

export default ManagerAudiEdit