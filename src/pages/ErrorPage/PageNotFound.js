import React from 'react'
import { Link } from 'react-router-dom';
import style from './PageNotFound.module.css';
// import { RefreshCw } from 'react-feather';
const PageNotFound = () => {
  
  return (
    <div className={style.PageNotFoundMain}>
        
        <div className={style.PageNotFound}>
            <img
            alt=''
             src="https://www.kindpng.com/picc/m/164-1647170_404-page-04-404-error-page-png-transparent.png" />
            <h1>Page Not Found!</h1>
          <Link to="/" >  <button id={style.notFound} > Back To Home Page 
          </button></Link>
        </div>
    </div>
  )
}

export default PageNotFound