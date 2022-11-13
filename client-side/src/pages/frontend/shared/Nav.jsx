import React from 'react'
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../contexts/AuthContext';

function Nav() {
    const { checkAuth, logout } = useContext(AuthContext);
    async function tokentCheck() {
        let req = await fetch('http://localhost:5000/api/user/get/6322f4fadf4a45331a21dc34', {
            headers: {
                Authorization: 'Bearer ' + window.localStorage.getItem('token')
            }
        });

        let res = await req.json();
        console.log(res);
    }
    return (
        <>
            <div className="nav-full-width">
                <div className="wrapper-nav">
                    <div className="container">
                        <div className="row">
                            {/* ------------------mega menu----------- */}
                            <div id="_desktop_top_menu" className="menu js-top-menu hidden-md-down hidden-sm-down hidden-xs-down">
                                <ul className="top-menu" id="top-menu">
                                    <li className="cms-page" id="category-12">
                                        <Link className="dropdown-item" to="/" >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="cms-page" id="category-12">
                                        <Link className="dropdown-item" to="/products" >
                                            All Products
                                        </Link>
                                    </li>
                                    <li className="cms-page" id="category-12">
                                        <Link className="dropdown-item" to="/product-details" >
                                            Product Details
                                        </Link>
                                    </li>
                                    <li className="cms-page" id="cms-page-4">
                                        <Link className="dropdown-item" to="/about" >
                                            About us
                                        </Link>
                                    </li>
                                    <li className="cms-page" id="cms-page-1">
                                        <Link className="dropdown-item" to="/contact" >
                                            Contact us
                                        </Link>
                                    </li>
                                    <li className="cms-page" id="cms-page-1">
                                        <a onClick={tokentCheck} className="dropdown-item" href="#" >
                                            test token
                                        </a>
                                    </li>
                                    <li className="cms-page" id="cms-page-1">
                                        {
                                            !checkAuth.isAuth ?
                                                <Link className="dropdown-item" to="/login" >
                                                    Login
                                                </Link>
                                                :
                                                <a href="#"
                                                    onClick={() => window.confirm('logout') && logout()}
                                                    className="dropdown-item">Logout</a>
                                        }

                                    </li>
                                    <li className="cms-page" id="cms-page-1">
                                        <Link className="dropdown-item" to="/profile" >
                                            Profile
                                        </Link>
                                    </li>
                                    <li className="cms-page" id="cms-page-1">
                                        <Link className="dropdown-item" to="/dashboard" >
                                            Dashboard
                                        </Link>
                                    </li>
                                </ul>
                                <div className="clearfix" />
                            </div>
                            {/* ------------------mobile media--------- */}
                            <div id="menu-icon" className="menu-icon hidden-lg-up">
                                <i className="fa fa-bars" aria-hidden="true" />
                            </div>
                            <div id="_mobile_cart" />
                            <div id="_mobile_seach_widget" />
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav