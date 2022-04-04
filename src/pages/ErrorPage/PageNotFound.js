import React from 'react'
import { Link } from 'react-router-dom';
import style from './PageNotFound.module.css';
// import { RefreshCw } from 'react-feather';
const PageNotFound = () => {
  
  return (
    <div className={style.PageNotFoundMain}>
      <div className={style.PageNotFound}>
        <img
          alt=""
          src="https://i.pinimg.com/originals/84/1d/f6/841df65e1fae80904356e1c16bb886b6.jpg"
        />
        <h1>Page Not Found!</h1>
        <Link to="/">
          {" "}
          <button className={style.button} id={style.notFound}>
            {" "}
            Back To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound