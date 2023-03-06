import React from 'react'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import web from '../Img/error.webp'

const ErrorPage = () => {
  return (
    <div className='errorpage'>
          <img src={web} className='img-fluid p-5 m-3' alt="error" />
          <NavLink to="/" className="error-btn">Go Back</NavLink>
    </div>
  )
}

export default ErrorPage
