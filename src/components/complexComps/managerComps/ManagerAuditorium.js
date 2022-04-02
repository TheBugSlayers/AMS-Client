import React from 'react'
import style from './ManagerAuditorium.module.css'
import audImage from '../../../utils/static/images/Rectangle 4142.png'
import { Link } from 'react-router-dom'
import LayoutWrapper from '../../styleComps/Wrapper/LayoutWrapper'
import ManagerAudiEdit from './ManagerAudiEdit'

function ManagerAuditorium() {
    return (


        <LayoutWrapper>
            <div className={style.card}>
                <div >
                    <div className={style.topaudit}>
                        <h2 >Apple Auditorium</h2>
                        <Link to='./edit'><button class="btn btn-primary">Edit</button></Link>
                    </div>
                    <hr style={{width: "100%"}}/>
                </div>
                <div>
                    <div className={style.maindiv}>
                        <div className={style.imageDiv}>
                            <img src={audImage} className={style.imgs} alt='' />
                        </div>
                        <div>
                            {/* <div className={style.details}> */}
                            <div className={style.details}>
                                <div>
                                    <div>
                                        <div className={style.contentHeader}>Total Capacity</div>
                                        <div className={style.contentDesc}>820</div>
                                    </div>
                                    <div>
                                        <div className={style.contentHeader}>City</div>
                                        <div className={style.contentDesc}>New York</div>
                                    </div>

                                </div>
                                <div>

                                    <div>
                                        <div className={style.contentHeader}>Cost/hour</div>
                                        <div className={style.contentDesc}>20,000</div>
                                    </div>

                                    <div>
                                        <div className={style.contentHeader}>Adress</div>
                                        <div style={{ maxWidth: 185 }} className={style.contentDesc}>28 Wall Avenue, Las Cruces,nm, 88001  United States</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.description}>

                                <div>
                                    <div className={style.contentHeader}>Description</div>
                                    <div style={{ maxWidth: 600 }} className={style.contentDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed pellentesque id lobortis integer accumsan molestie
                                        nulla sollicitudin quam. Ac viverra aliquet amet, pharetra
                                        eget feugiat. Purus elit sed vitae ullamcorper et. Dignissim
                                        velit ut sed odio.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </LayoutWrapper>
    )
}

export default ManagerAuditorium