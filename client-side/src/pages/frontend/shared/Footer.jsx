import React from 'react'

function Footer() {
    return (
        <>
            {/* -----------------footer-------------------- */}
            <footer id="footer">
                <div className="footer-before">
                    <div className="container">
                        <div className="row">
                            {/* -------------------newsletter---------- */}
                            <div className="block_newsletter col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div id="newsletter-container" className="box-content">
                                    <div className="newsletter_text">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                <symbol id="mail" viewBox="0 0 500 500">
                                                    <title>mail</title>
                                                    <path d="m494.2,488c0,0 0-225.8 0-301 0-3.1-3.9-7-7.7-9.9l-78.7-57.1v-63.1c0-6.2-5.2-10.4-10.4-10.4h-89.7l-45.7-33.3c-3.1-2.1-8.3-2.1-11.5,0l-45.7,33.3h-89.7c-6.2,0-10.4,5.2-10.4,10.4v62.4l-79.7,57.9c-4.7,2.9-7.7,6.7-7.7,9.9 0,75.7 0,303 0,303 0,5.9 4.7,10 9.6,10.4 0.3,0 0.5,0 0.8,0h456c6.7-0.1 10.5-5.3 10.5-12.5zm-19.8-282.3v263.6l-172.1-137.8 172.1-125.8zm-7.7-18.3l-58.9,42.9v-86.2l58.9,43.3zm-210.9-154.5l18.3,13.5h-36.7l18.4-13.5zm131.2,34.4v178.2l-131.2,95.6-131.2-95.6v-178.2h262.4zm-349.8,138.4l172.1,125.8-172.1,138.6v-264.4zm67.6,25.4l-60.4-44 60.4-43.9v87.9zm-48.9,249.5l170.1-136.9 23.5,17.2c4.5,3.4 7.9,3.4 12.5,0l23.5-17.2 171.1,136.9h-400.7z" />
                                                    <rect width="140.5" x="186.1" y="118.3" height="19.8" />
                                                    <rect width="140.5" x="186.1" y="181.8" height="19.8" />
                                                    <rect width="140.5" x="186.1" y="245.3" height="19.8" />
                                                </symbol>
                                            </svg>
                                            <svg className="icon" viewBox="0 0 40 40">
                                                <use xlinkHref="#mail" x="0%" y="0%" />
                                            </svg>
                                        </div>
                                        <div className="block-newsletter-title">
                                            <h2>Sign Up Newsletter</h2>
                                            <p className="block-newsletter-label">Sign Up And Get Latest offer</p>
                                        </div>
                                    </div>
                                    <div className="newsletter_form">
                                        <form action="#" method="post">
                                            <input name="email" defaultValue placeholder="Your email address" type="text" />
                                            <a className="button btn-submit">
                                                <span className="hidden-xs-down">SUBSCRIBE</span>
                                                <span className="hidden-sm-up">Go</span>
                                            </a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* -------------------socialmedia---------- */}
                            <div className="block-social col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ backgroundImage: 'url(assets/images/social-img.png)' }}>
                                <div id="block-container">
                                    <ul className="social-inner">
                                        <li className="facebook">
                                            <a href="#" target="_blank"> <i className="fa fa-facebook" /><span className="socialicon-label">Facebook</span> </a>
                                        </li>
                                        <li className="twitter">
                                            <a href="#" target="_blank"> <i className="fa fa-twitter" /><span className="socialicon-label">Twitter</span> </a>
                                        </li>
                                        <li className="rss">
                                            <a href="#" target="_blank"> <i className="fa fa-pinterest-p" /><span className="socialicon-label">Pinterest</span> </a>
                                        </li>
                                        <li className="youtube">
                                            <a href="#" target="_blank"> <i className="fa fa-youtube" /><span className="socialicon-label">YouTube</span> </a>
                                        </li>
                                        <li className="googleplus">
                                            <a href="#" target="_blank"> <i className="fa fa-google-plus" /><span className="socialicon-label">Google +</span> </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="container">
                        <div className="row">
                            {/* -------------------contactblock ---------- */}
                            <div className="block-contact col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                <h3 className="h3 title_block hidden-md-down">Store information</h3>
                                <div id="contact-info-container" className="footer-contact">
                                    <div className="block address col-lg-12 col-md-4 col-sm-4 col-xs-12">
                                        <span className="icon"><i className="material-icons"></i></span>
                                        <div className="content">
                                            Demo Shop<br />
                                            01 Demo Street<br />
                                            France
                                        </div>
                                    </div>
                                    <div className="block phone col-lg-12 col-md-4 col-sm-4 col-xs-12">
                                        <span className="icon phone"><i className="material-icons"></i></span>
                                        <div className="content">
                                            <a href="#">+00 900 123456789</a>
                                        </div>
                                    </div>
                                    <div className="block email col-lg-12 col-md-4 col-sm-4 col-xs-12">
                                        <span className="icon"><i className="material-icons"></i></span>
                                        <div className="content">
                                            <a href="#">admin@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* -------------------myaccount---------- */}
                            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 links wrapper footer-block">
                                <h3 className="h3 title_block hidden-md-down">Your account</h3>
                                <div className="footer-title clearfix hidden-lg-up collapsed" data-target="#footer_account_list" data-toggle="collapse">
                                    <span className="h3">Your account</span>
                                    <span className="float-xs-right">
                                        <span className="navbar-toggler collapse-icons">
                                            <i className="material-icons add"></i>
                                            <i className="material-icons remove"></i>
                                        </span>
                                    </span>
                                </div>
                                <ul id="footer_account_list" className="footer-dropdown collapse">
                                    <li>
                                        <a className="cms-page-link" href="#">
                                            Personal info
                                        </a>
                                    </li>
                                    <li>
                                        <a className="cms-page-link" href="#">
                                            Orders
                                        </a>
                                    </li>
                                    <li>
                                        <a className="cms-page-link" href="#">
                                            Credit slips
                                        </a>
                                    </li>
                                    <li>
                                        <a className="cms-page-link" href="#">
                                            Addresses
                                        </a>
                                    </li>
                                    <li>
                                        <a className="cms-page-link" href="#">
                                            My Wishlists
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* -------------------linklist---------- */}
                            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 links wrapper footer-block">
                                <h3 className="h3 title_block hidden-md-down">Product</h3>
                                <div className="footer-title clearfix hidden-lg-up collapsed" data-target="#footer_sub_menu_83280" data-toggle="collapse">
                                    <span className="h3 title_block">Product</span>
                                    <span className="navbar-toggler collapse-icons">
                                        <i className="material-icons add"></i>
                                        <i className="material-icons remove"></i>
                                    </span>
                                </div>
                                <ul id="footer_sub_menu_83280" className="footer-dropdown collapse">
                                    <li>
                                        <a className="cms-page-link" href="#">
                                            Delivery
                                        </a>
                                    </li>
                                    <li>
                                        <a className="cms-page-link" href="#">
                                            Legal Notice
                                        </a>
                                    </li>
                                    <li>
                                        <a className="cms-page-link" href="#">
                                            Prices drop
                                        </a>
                                    </li>
                                    <li>
                                        <a className="cms-page-link" href="#">
                                            New products
                                        </a>
                                    </li>
                                    <li>
                                        <a className="cms-page-link" href="#">
                                            Best sales
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* -------------------linklist---------- */}
                            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 links wrapper footer-block">
                                <h3 className="h3 title_block hidden-md-down">Our Company</h3>
                                <div className="footer-title clearfix hidden-lg-up collapsed" data-target="#footer_sub_menu_83281" data-toggle="collapse">
                                    <span className="h3 title_block">Our Company</span>
                                    <span className="navbar-toggler collapse-icons">
                                        <i className="material-icons add"></i>
                                        <i className="material-icons remove"></i>
                                    </span>
                                </div>
                                <ul id="footer_sub_menu_83281" className="footer-dropdown collapse">
                                    <li>
                                        <a className="cms-page-link" href="#">
                                            Delivery
                                        </a>
                                    </li>
                                    <li>
                                        <a className="cms-page-link" href="#">
                                            Legal Notice
                                        </a>
                                    </li>
                                    <li>
                                        <a className="cms-page-link" href="about-us.html">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a className="cms-page-link" href="#">
                                            Secure Payment
                                        </a>
                                    </li>
                                    <li>
                                        <a className="cms-page-link" href="contactpage.html">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-after">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-xs-12">
                                {/* -------------------copyrights---------- */}
                                <p className="footer-aftertext">
                                    <a className="_blank" href="#" target="_blank">
                                        Copyright 2020 All Rights Reserved
                                    </a>
                                </p>
                            </div>
                            <div className="col-lg-6 col-xs-12">
                                {/* -------------------payment block---------- */}
                                <div className="paymentlogo-container">
                                    <img src="assets/images/paymenticon/1.png" alt="Discover" />
                                    <img src="assets/images/paymenticon/2.png" alt="Visa" />
                                    <img src="assets/images/paymenticon/3.png" alt="JCB" />
                                    <img src="assets/images/paymenticon/4.png" alt="PayPal" />
                                    <img src="assets/images/paymenticon/5.png" alt="Master Card" />
                                    <img src="assets/images/paymenticon/6.png" alt="American Express" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a id="slidetop" href="#" />
            </footer>
        </>
    )
}

export default Footer