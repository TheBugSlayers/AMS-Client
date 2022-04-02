import style from './AdminDashboardCard.module.css';
import React from 'react'

const AdminDashboardCardItem = (props) => {
    return (

        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    <div className={style.auditoriaCards}>
                        <div>
                            <img src={props.image} alt="" />
                        </div>
                        <div className={style.auditoriaCardsRight}>
                            <h3>{props.count}</h3>
                            <p className="card-text">{props.title}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminDashboardCardItem