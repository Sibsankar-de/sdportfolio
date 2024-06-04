import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className='container pf-common-prop mt-5 flex-column'>
        <div><h3>Page not found !</h3></div>
        <div><h6>404 error occured</h6></div>
        <div><span>Browse other URL for further Process. <Link to="/">Home</Link></span></div>
    </div>
  )
}
