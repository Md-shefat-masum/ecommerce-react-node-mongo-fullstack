import React from 'react'
import { Link } from 'react-router-dom'

function BackendNav() {
    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 pt-2 col-lg-2 d-md-block bg-light sidebar">
                <div className="card">
                    <div className="card-body text-center">
                        <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" className="rounded rounded-circle img-thumbnail" alt="" style={{ width: '70px' }} />
                        <h4>Mr.John</h4>
                    </div>
                </div>
                <div className="pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/dashboard">
                                <i className="fas fa-home" /> &nbsp;
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/dashboard/cart">
                                <i className="fas fa-edit" /> &nbsp;
                                User management
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/dashboard/contact">
                                <i className="fas fa-edit" /> &nbsp;
                                Cotact Message
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/dashboard/contact">
                                <i className="fas fa-edit" /> &nbsp;
                                Subscribers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/dashboard/cart">
                                <i className="fas fa-edit" /> &nbsp;
                                Orders
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-edit" /> &nbsp;
                                Product Management
                            </a>
                            <ul>
                                <li>
                                    <Link className="nav-link" aria-current="page" to="/dashboard/products">
                                        <i className="fas fa-list" /> &nbsp;
                                        All Products
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" aria-current="page" to="/dashboard/categories">
                                        <i className="fas fa-list" /> &nbsp;
                                        All Category
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" aria-current="page" to="/dashboard/cart">
                                        <i className="fas fa-list" /> &nbsp;
                                        Reporting
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-edit" /> &nbsp;
                                Blog Management
                            </a>
                            <ul>
                                <li>
                                    <Link className="nav-link" aria-current="page" to="/dashboard/cart">
                                        <i className="fas fa-list" /> &nbsp;
                                        All Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" aria-current="page" to="/dashboard/cart">
                                        <i className="fas fa-list" /> &nbsp;
                                        Blog Category
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" aria-current="page" to="/dashboard/cart">
                                        <i className="fas fa-list" /> &nbsp;
                                        Comments
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-edit" /> &nbsp;
                                Frontend Management
                            </a>
                            <ul>
                                <li>
                                    <Link className="nav-link" aria-current="page" to="/dashboard/cart">
                                        <i className="fas fa-list" /> &nbsp;
                                        Basic Info
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" aria-current="page" to="/dashboard/cart">
                                        <i className="fas fa-list" /> &nbsp;
                                        Banner
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" aria-current="page" to="/dashboard/cart">
                                        <i className="fas fa-list" /> &nbsp;
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" aria-current="page" to="/dashboard/cart">
                                        <i className="fas fa-list" /> &nbsp;
                                        Reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" aria-current="page" to="/dashboard/cart">
                                        <i className="fas fa-list" /> &nbsp;
                                        Advertise
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" aria-current="page" to="/dashboard/cart">
                                        <i className="fas fa-list" /> &nbsp;
                                        Discount Products
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" aria-current="page" to="/dashboard/cart">
                                        <i className="fas fa-list" /> &nbsp;
                                        Brands
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                <i className="fas fa-globe" /> &nbsp; goto website
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default BackendNav