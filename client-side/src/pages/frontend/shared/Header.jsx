import React from 'react'
import useFrontendContext from '../../../hooks/useFrontendContext';
import Nav from './Nav'
import resourceLink from '../../../hooks/resourceLink'
import { Link } from 'react-router-dom';

function Header() {
    const { state, dispatch } = useFrontendContext();
    const { carts, total_cart_amount } = state;
    return (
        <>
            {/* --------------------header------------ */}
            <header id="header" className="home">
                <div className="header-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 left-nav">
                                <div id="ishiheaderblock">
                                    <p>Welcome To Toy Town, Let's Subscribe To GET Special Offer</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 right-nav">
                                <div className="userinfo-inner">
                                    <ul className="userinfo">
                                        <li className="log-in">
                                            <a href="loginpage.html" id="customer_login_link">Log in</a>
                                        </li>
                                        <li className="create_account">
                                            <a href="user-register.html" id="customer_register_link">Create Account</a>
                                        </li>
                                        <li className="wishlist">
                                            <a href="mywishlistpage.html">Wishlist</a>
                                        </li>
                                        <li className="checkout">
                                            <a href="checkoutpage.html">Checkout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            {/* --------------------desktop_logo------------ */}
                            <div id="desktop_logo">
                                <a href="index.html">
                                    <img className="logo img-responsive" src="/assets/images/header-logo.png" alt="Demo Shop" />
                                </a>
                            </div>
                            {/* Block search  */}
                            <div id="_desktop_seach_widget">
                                <div id="search_widget" className="search-widget">
                                    <span className="search-logo hidden-lg-up">
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                            <symbol id="magnifying-glass" viewBox="0 0 910 910">
                                                <title>magnifying-glass</title>
                                                <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5 S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9 C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z" />
                                            </symbol>
                                        </svg>
                                        <svg className="icon" viewBox="0 0 30 30">
                                            <use xlinkHref="#magnifying-glass" x="22%" y="20%" />
                                        </svg>
                                    </span>
                                    <form method="get" action="#">
                                        <input name="controller" defaultValue="search" type="hidden" />
                                        <span role="status" aria-live="polite" className="ui-helper-hidden-accessible" />
                                        <input name="s" defaultValue placeholder="Search our catalog" className="ui-autocomplete-input" autoComplete="off" type="text" />
                                        <button type="submit">
                                            <i className="material-icons search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            {/* -------------------shopping cart----------- */}
                            <div id="_desktop_cart">
                                <div className="blockcart cart-preview inactive">
                                    <div className="header">
                                        <span className="cart-link">
                                            <span className="cart-img hidden-md-down hidden-sm-down hidden-xs-down">

                                                <svg className="icon" viewBox="0 0 30 30">
                                                    <use xlinkHref="#shopping-cart-empty-side-view" x="20%" y="20%" />
                                                </svg>
                                            </span>
                                            <span className="cart-img hidden-lg-up">
                                                <svg className="icon" viewBox="0 0 40 40">
                                                    <use xlinkHref="#shopping-cart" x="18%" y="22%" />
                                                </svg>
                                            </span>
                                            <span className="cart-content">
                                                <span className="cart-name">
                                                    <span style={{ textTransform: 'uppercase' }}>Cart</span>
                                                    {carts.length} items
                                                </span>
                                                <span className="cart-products-count hidden-lg-up">
                                                    {carts.length}
                                                </span>
                                            </span>
                                        </span>
                                        <div className="cart-dropdown">
                                            <div className="product-container">
                                                {
                                                    carts.map((product, index) => {
                                                        return <div key={index} className="product">
                                                            <a className="product-image" href="#">
                                                                <img src={resourceLink(product.thumb_image)} alt="Simul dolorem voluptaria" />
                                                            </a>
                                                            <div className="product-detail">
                                                                <div className="price">
                                                                    <a className="cart_block_product_name" href="#">
                                                                        {product.title}
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <span className="quantity-formated">
                                                                        <span className="quantity">
                                                                            {product.qty}
                                                                        </span>
                                                                        &nbsp;x&nbsp;
                                                                        ${product.discount_price || product.price}
                                                                        =
                                                                        ${product.qty * (product.discount_price || product.price)}
                                                                    </span>

                                                                </div>
                                                            </div>
                                                            <div className="remove-product">
                                                                <a className="remove-from-cart"
                                                                    onClick={() => dispatch({ fn: null, type: 'removeCart', payload: { index } })}
                                                                    rel="nofollow" href="#">
                                                                    <i className="material-icons">delete</i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    })
                                                }

                                            </div>
                                            <div className="billing-info">
                                                <div className="billing total-info">
                                                    <span className="label">Total</span>
                                                    <span className="value">${total_cart_amount}</span>
                                                </div>
                                            </div>
                                            <div className="cart-btn col-xs-12">
                                                <Link to={'cart'} className="btn btn-primary checkout">Carts</Link>
                                                <a href="checkoutpage.html" className="btn btn-primary checkout">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* -------------------headercontact----------- */}
                            <div id="contact_info">
                                <a href="contactpage.html" className="contact-num">
                                    <span className="call-img">
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                            <symbol id="call" viewBox="0 0 110 110">
                                                <title>call</title>
                                                <path id="Shape" d="m25.017 33.983c-5.536-5.536-6.786-11.072-7.068-13.29-.0787994-.6132828.1322481-1.2283144.571-1.664l4.48-4.478c.6590136-.6586066.7759629-1.685024.282-2.475l-7.133-11.076c-.5464837-.87475134-1.6685624-1.19045777-2.591-.729l-11.451 5.393c-.74594117.367308-1.18469338 1.15985405-1.1 1.987.6 5.7 3.085 19.712 16.855 33.483s27.78 16.255 33.483 16.855c.827146.0846934 1.619692-.3540588 1.987-1.1l5.393-11.451c.4597307-.9204474.146114-2.0395184-.725-2.587l-11.076-7.131c-.7895259-.4944789-1.8158967-.3783642-2.475.28l-4.478 4.48c-.4356856.4387519-1.0507172.6497994-1.664.571-2.218-.282-7.754-1.532-13.29-7.068z" />
                                                <path id="Shape" d="m47 31c-1.1045695 0-2-.8954305-2-2-.0093685-8.2803876-6.7196124-14.9906315-15-15-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2c10.4886126.0115735 18.9884265 8.5113874 19 19 0 1.1045695-.8954305 2-2 2z" />
                                                <path id="Shape" d="m57 31c-1.1045695 0-2-.8954305-2-2-.0154309-13.800722-11.199278-24.9845691-25-25-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2c16.008947.01763587 28.9823641 12.991053 29 29 0 .530433-.2107137 1.0391408-.5857864 1.4142136-.3750728.3750727-.8837806.5857864-1.4142136.5857864z" />
                                            </symbol>
                                        </svg>
                                        <svg className="icon" viewBox="0 0 40 40">
                                            <use xlinkHref="#call" x="20%" y="25%" />
                                        </svg>
                                    </span>
                                    <span className="call-num">+00 900 123456789</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Nav></Nav>
            </header>
            {/* -------------------mobile media---------- */}
            <div id="mobile_top_menu_wrapper" className="hidden-lg-up" style={{ display: 'none' }}>
                <div id="top_menu_closer">
                    <i className="material-icons"></i>
                </div>
                <div className="js-top-menu mobile" id="_mobile_top_menu" />
            </div>
        </>
    )
}

export default Header