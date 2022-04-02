import React from 'react'
import style from './ManagerAuditorium.module.css'
import audImage from '../../../utils/static/images/Rectangle 4142.png'
import { Link } from 'react-router-dom'
import ManagerAudiEdit from './ManagerAudiEdit'

function ManagerAuditorium() {
    return (


        <div style={{ marginTop: 60, width: '100%' }}>
          
            <div >
                <div className={style.topaudit}>
                    <h2 >Apple Auditorium</h2>
                    <Link to='./edit'><button class="btn btn-primary">Edit</button></Link>
                </div>
                <hr />
            </div>
            <div>
                <div className={style.maindiv}>
                    <div>
                        <img src={audImage} className={style.imgs} alt='' />
                    </div>
                    <div style={{ width: '100%' }}>
                        {/* <div className={style.details}> */}
                        <div className={style.details}>
                            <div>
                                <div>
                                    <p>Total Capacity</p>
                                    <p>820</p>
                                </div>
                                <div>
                                    <p>City</p>
                                    <p>New York</p>
                                </div>

                            </div>
                            <div>
                                <div>
                                    <p>Cost/hour</p>
                                    <p>20,000</p>
                                </div>

                                <div>
                                    <p>Address</p>
                                    <p style={{ maxWidth: 145 }}>28 Wall Avenue, Las Cruces,nm, 88001  United States</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.description}>
                            <div style={{ maxWidth: 450 }}>
                                <p>Description</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed pellentesque id lobortis integer accumsan molestie
                                    nulla sollicitudin quam. Ac viverra aliquet amet, pharetra
                                    eget feugiat. Purus elit sed vitae ullamcorper et. Dignissim
                                    velit ut sed odio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ManagerAuditorium