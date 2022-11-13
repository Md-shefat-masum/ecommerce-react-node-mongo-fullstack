import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not_found'>
        <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=2000" alt="" />
        <br />
        <Link to={'/'} className="btn btn-info my-4 text-uppercase">go back</Link>
    </div>
  )
}

export default NotFound