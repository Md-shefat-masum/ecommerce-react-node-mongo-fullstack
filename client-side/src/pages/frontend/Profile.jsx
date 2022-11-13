import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Profile() {
    return (
        <div className='row px-2 my-5'>
            <div className="col-lg-4">
                <div className="card mb-4">
                    <div className="card-body text-center mb-3">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                        <h3 className="my-3">John Smith</h3>
                    </div>
                    <ul className='border  border-1 shadow-sm card rounded'>
                        <li><Link to="/profile/dashboard" className='btn text-left border-0 btn-outline-info d-block' >Dashboard</Link></li>
                        <li><Link to="/profile/order-list" className='btn text-left border-0 btn-outline-info d-block'>Order List</Link></li>
                        <li><Link to="/profile/cart-list" className='btn text-left border-0 btn-outline-info d-block' >Cart List</Link></li>
                        <li><Link to={'/profile/wishlist'} className='btn text-left border-0 btn-outline-info d-block'>Wishlist</Link></li>
                        <li><Link to={'/profile/payments'} className='btn text-left border-0 btn-outline-info d-block'>Payments</Link></li>
                        <li><Link to={'/profile/settings'} className='btn text-left border-0 btn-outline-info d-block'>Settings</Link></li>
                        <li><Link to={'/profile/logout'} className='btn text-left border-0 btn-outline-info d-block'>Logout</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-8">
                <Outlet />
                {/* <div className="card">
                    <div className="card-header">
                        <h3>Dashboard</h3>
                    </div>
                    <div className="card-body">

                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Profile